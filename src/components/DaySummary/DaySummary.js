import { useContext } from 'react';
import styled from 'styled-components';
import WeatherContext from '../../context/WeatherContext';

const DaySummaryContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 65rem;
  color: hsl(234, 14%, 70%);
  font-size: 1.5rem;
  padding: 3rem 3rem;

  @media (max-width: 768px) {
    padding: 1.5rem 0.5rem;
    font-size: 1rem;
  }
`;

const WeatherIcon = styled.div`
  img {
    width: 12rem;
  }

  @media (max-width: 768px) {
    img {
      width: 5rem;
    }
  }
`;

const WeatherDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const WeatherCurrent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 15rem;

  @media (max-width: 768px) {
    width: 8rem;
  }
`;

const WeatherLocalization = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HighlightCurrentTemperature = styled.span`
  font-size: 8rem;
  font-weight: bold;
  color: #fff;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const HighlightText = styled.span`
  font-size: 4rem;
  font-weight: bold;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const DaySummary = () => {
  const context = useContext(WeatherContext);

  const render = () => {
    const currentForecast = context.selectedForecast ? context.selectedForecast : context.forecasts[0];
    if (!currentForecast) {
      return null;
    }
    return (
      <DaySummaryContainer>
        <WeatherIcon>
          <img src={currentForecast.weatherIcon} alt="Current Weather Icon" />
        </WeatherIcon>
        <WeatherDetails>
          <WeatherCurrent>
            <span>{currentForecast.weatherCondition}</span>
            <span>{`${currentForecast.maxTemperature} / ${currentForecast.minTemperature}`}</span>
          </WeatherCurrent>
          <HighlightCurrentTemperature>{currentForecast.temperature}</HighlightCurrentTemperature>
        </WeatherDetails>
        <WeatherLocalization>
          <span>Munich</span>
          <HighlightText>{currentForecast.dayOfWeek}</HighlightText>
          <HighlightText>{`${currentForecast.dayNumber}. ${currentForecast.month}`}</HighlightText>
        </WeatherLocalization>
      </DaySummaryContainer>
    );
  };

  return render();
};

export default DaySummary;
