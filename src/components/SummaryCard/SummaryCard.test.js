import { fireEvent, render } from '@testing-library/react';
import WeatherContext from '../../context/WeatherContext';
import SummaryCard from './SummaryCard';

const FORECAST = { hour: '08:00', weatherIcon: 'MOCK', temperature: '10°' };

const renderWithContext = (component, contextProps) => {
  return {
    ...render(<WeatherContext.Provider value={{ ...contextProps }}>{component}</WeatherContext.Provider>),
  };
};

describe('<SummaryCard />', () => {
  it('should render SummaryCard component', () => {
    const { asFragment } = render(<SummaryCard />);
    expect(asFragment()).toBeTruthy();
  });

  it('should render SummaryCard component with correct hour passed in the forecast object', () => {
    const { getByText } = render(<SummaryCard forecast={FORECAST} />);
    expect(getByText(/08:00/i)).toBeTruthy();
  });

  it('should render SummaryCard component with the correct weather icon', () => {
    const { getByAltText } = render(<SummaryCard forecast={FORECAST} />);
    const weatherConditionIcon = getByAltText(/Current Weather Icon/i);
    expect(weatherConditionIcon.src).toContain('MOCK');
  });

  it('should render SummaryCard component with correct temperature passed in the forecast object', () => {
    const { getByText } = render(<SummaryCard forecast={FORECAST} />);
    expect(getByText(/10°/i)).toBeTruthy();
  });

  it('should call "selectForecast" when a SummaryCard component is clicked', () => {
    const selectForecast = jest.fn();
    const { getByText } = renderWithContext(<SummaryCard forecast={FORECAST} />, {
      selectForecast,
    });
    fireEvent.click(getByText(/08:00/i));
    expect(selectForecast).toHaveBeenCalled();
  });
});
