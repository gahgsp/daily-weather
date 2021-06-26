import DaySummary from '../components/DaySummary/DaySummary';
import SummarySlider from '../components/SummarySlider/SummarySlider';
import WeatherProvider from '../context/WeatherProvider';
import './App.css';

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
