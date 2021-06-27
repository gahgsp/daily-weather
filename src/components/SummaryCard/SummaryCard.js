import { useContext } from 'react';
import styled, { css } from 'styled-components';
import WeatherContext from '../../context/WeatherContext';

const SummaryCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1rem;
  margin: 0 0.6rem;
  cursor: pointer;
  border-radius: 6px;

  img {
    width: 8rem;
  }

  ${(props) =>
    !props.currentSelected &&
    css`
      :hover {
        background-color: hsl(235, 28%, 32%);
      }
    `}

  ${(props) =>
    props.currentSelected &&
    css`
      background-color: hsl(234, 20%, 40%);
    `}
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

/**
 * The summary card component that is shown in the slider component.
 * @param forecast The forecast object to be shown by the summary card.
 * @returns the summary card component that will be rendered on the page.
 */
const SummaryCard = ({ forecast }) => {
  const context = useContext(WeatherContext);

  /**
   * Wrapper function to handle the click event on a summary card component.
   * @returns the function defined to be called when clicking on the component.
   */
  const handleSelectionEvent = () => {
    return context.selectForecast(forecast);
  };

  return (
    <SummaryCardContainer onClick={() => handleSelectionEvent()} currentSelected={forecast?.id === context?.selectedForecast?.id}>
      <SummaryHour>{forecast.hour}</SummaryHour>
      <img src={forecast.weatherIcon} alt="Current Weather Icon" />
      <SummaryTemperature>{forecast.temperature}</SummaryTemperature>
    </SummaryCardContainer>
  );
};

export default SummaryCard;
