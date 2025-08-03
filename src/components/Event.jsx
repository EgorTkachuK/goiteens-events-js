import events from "../data/upcoming-events.json";
import { getEventDuration } from "./EventDuration";
import { HiMiniMegaphone } from "react-icons/hi2";
import { HiMiniMapPin } from "react-icons/hi2";
import { BsCalendar2Date } from "react-icons/bs";
import { GiDuration } from "react-icons/gi";
import { TbFreeRights } from "react-icons/tb";
import PropTypes from "prop-types";

import { Location } from "./../styledComponents/styles";
import { EventCard } from "./../styledComponents/styles";
import { Date } from "./../styledComponents/styles";
import { Duration } from "./../styledComponents/styles";
import { Speaker } from "./../styledComponents/styles";
import { Type } from "./../styledComponents/styles";
import { Name } from "./../styledComponents/styles";
import { Centre } from "./../styledComponents/styles";

export const EventList = () => {
  return (
    <Centre>
      {events.map((event, index) => {
        const duration = getEventDuration(event.time.start, event.time.end);

        return (
          <EventCard key={index} className="event-card">
            <Name>{event.name}</Name>
            <Location>
              <HiMiniMapPin /> Location: {event.location}
            </Location>
            <Speaker>
              <HiMiniMegaphone /> Speaker: {event.speaker}
            </Speaker>
            <Type>
              <TbFreeRights /> Type: {event.type}
            </Type>
            <Date>
              <BsCalendar2Date /> Date: {event.time.start}
            </Date>
            <Duration>
              <GiDuration /> Duration: {duration.hours}:
              {duration.minutes < 10
                ? `0${duration.minutes}`
                : duration.minutes}{" "}
              h
            </Duration>
          </EventCard>
        );
      })}
    </Centre>
  );
};
EventList.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      location: PropTypes.string,
      speaker: PropTypes.string,
      type: PropTypes.string.isRequired,
      time: PropTypes.shape({
        start: PropTypes.string.isRequired,
        end: PropTypes.string,
      }).isRequired,
    })
  ).isRequired,
};
