import styled from 'styled-components';

const SummaryCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const SummaryCard = ({ forecast }) => {
  return (
    <SummaryCardContainer>
      <SummaryHour>{forecast.hour}</SummaryHour>
      <img src={forecast.weatherIcon} alt="Current Weather Icon" />
      <SummaryTemperature>{forecast.temperature}</SummaryTemperature>
    </SummaryCardContainer>
  );
};

export default SummaryCard;
