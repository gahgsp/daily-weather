import { useContext } from 'react';
import styled from 'styled-components';
import WeatherContext from '../../context/WeatherContext';

const SummaryCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;
  height: 20rem;
  cursor: pointer;

  img {
    width: 8rem;
  }
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

const SummaryCard = ({ forecast }) => {
  const context = useContext(WeatherContext);

  const handleSelectionEvent = () => {
    return context.selectForecast(forecast);
  };

  return (
    <SummaryCardContainer onClick={() => handleSelectionEvent()}>
      <SummaryHour>{forecast.hour}</SummaryHour>
      <img src={forecast.weatherIcon} alt="Current Weather Icon" />
      <SummaryTemperature>{forecast.temperature}</SummaryTemperature>
    </SummaryCardContainer>
  );
};

export default SummaryCard;
