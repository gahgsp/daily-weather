import DaySummary from '../components/DaySummary/DaySummary';
import SummarySlider from '../components/SummarySlider/SummarySlider';
import './App.css';

const App = () => {
  return (
    <div className="main">
      <DaySummary />
      <SummarySlider />
    </div>
  );
};

export default App;
