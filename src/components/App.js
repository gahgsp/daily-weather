import DaySummary from '../components/DaySummary/DaySummary';
import SummarySlider from '../components/SummarySlider/SummarySlider';
import WeatherProvider from '../context/WeatherProvider';
import './App.css';

/**
 * The main container component for the application.
 * This component has the responsibility to encapsulate all the components that need to be shown to the user.
 * @returns the main app component.
 */
const App = () => {
  return (
    <div className="main">
      <WeatherProvider>
        <DaySummary />
        <SummarySlider />
      </WeatherProvider>
    </div>
  );
};

export default App;
