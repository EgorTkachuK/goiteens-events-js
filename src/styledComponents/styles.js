

import styled from 'styled-components'
import { Text } from './globalStyles';

export const Location = styled(Text)`
color: #732f2f;
`;
export const Name = styled(Text)`
color: #000000ff;
`;

export const Speaker = styled(Text)`
color: #2f7373;
`;
export const Type = styled(Text)`
color: #2f2f73;
`;
export const Date = styled(Text)`
color: #4a25c3ff;
`;
export const Duration = styled(Text)`
color: #beca4dff;
`;
export const EventCard = styled.div`
  border: 5px solid #000 ;   
    border-radius: 30px;
background-color: #f9f9f9;
    `;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    aign-items: center;
   
    `;
export const Centre = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  gap: 40px;
    `;