import styled from 'styled-components';
import WeatherCloud from '../../assets/weather-cloud.svg';

const SummaryCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  height: 20rem;
`;

const SummaryHour = styled.span`
  font-size: 1.5rem;
  color: hsl(234, 14%, 70%);
`;

const SummaryTemperature = styled.span`
  font-size: 3rem;
  color: #fff;
  font-weight: 700;
`;

const SummaryCard = () => {
  return (
    <SummaryCardContainer>
      <SummaryHour>13:00</SummaryHour>
      <img src={WeatherCloud} alt="Current Weather Icon" />
      <SummaryTemperature>12°</SummaryTemperature>
    </SummaryCardContainer>
  );
};

export default SummaryCard;
