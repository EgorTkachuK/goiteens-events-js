
export const getEventDuration = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const diffMs = end - start;
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

  return {
    hours: diffHours,
    minutes: diffMinutes
  };
};
