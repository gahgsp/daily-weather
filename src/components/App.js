import styled from 'styled-components';
import DaySummary from '../components/DaySummary/DaySummary';
import SummarySlider from '../components/SummarySlider/SummarySlider';
import WeatherProvider from '../context/WeatherProvider';

const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
`;

/**
 * The main container component for the application.
 * This component has the responsibility to encapsulate all the components that need to be shown to the user.
 * @returns the main app component.
 */
const App = () => {
  return (
    <MainContainer>
      <WeatherProvider>
        <DaySummary />
        <SummarySlider />
      </WeatherProvider>
    </MainContainer>
  );
};

export default App;
