import { render } from '@testing-library/react';
import WeatherContext from '../../context/WeatherContext';
import DaySummary from './DaySummary';

const FORECAST = {
  weatherIcon: 'MOCK',
  weatherCondition: 'Sunny',
  maxTemperature: '10°',
  minTemperature: '0°',
  temperature: '20°',
  dayOfWeek: 'Friday',
  dayNumber: '28',
  month: 'February',
};

const renderWithContext = (component, contextProps) => {
  return {
    ...render(<WeatherContext.Provider value={{ ...contextProps }}>{component}</WeatherContext.Provider>),
  };
};

describe('<DaySummary />', () => {
  it('should render DaySummary component', () => {
    const { asFragment } = renderWithContext(<DaySummary />);
    expect(asFragment()).toBeTruthy();
  });

  it('should render DaySummary component with the correct weather icon', () => {
    const { getByAltText } = renderWithContext(<DaySummary />, {
      selectedForecast: FORECAST,
    });
    const weatherConditionIcon = getByAltText(/Current Weather Icon/i);
    expect(weatherConditionIcon.src).toContain('MOCK');
  });

  it('should render DaySummary component with the correct weather condition', () => {
    const { getByText } = renderWithContext(<DaySummary />, {
      selectedForecast: FORECAST,
    });
    expect(getByText(/Sunny/i)).toBeTruthy();
  });

  it('should render DaySummary component with the correct max temperature', () => {
    const { getByText } = renderWithContext(<DaySummary />, {
      selectedForecast: FORECAST,
    });
    expect(getByText('10° / 0°')).toBeTruthy();
  });

  it('should render DaySummary component with the correct min temperature', () => {
    const { getByText } = renderWithContext(<DaySummary />, {
      selectedForecast: FORECAST,
    });
    expect(getByText('10° / 0°')).toBeTruthy();
  });

  it('should render DaySummary component with the correct temperature', () => {
    const { getByText } = renderWithContext(<DaySummary />, {
      selectedForecast: FORECAST,
    });
    expect(getByText(/20°/i)).toBeTruthy();
  });

  it('should render DaySummary component with the correct day of week', () => {
    const { getByText } = renderWithContext(<DaySummary />, {
      selectedForecast: FORECAST,
    });
    expect(getByText(/Friday/i)).toBeTruthy();
  });

  it('should render DaySummary component with the correct day of the month', () => {
    const { getByText } = renderWithContext(<DaySummary />, {
      selectedForecast: FORECAST,
    });
    expect(getByText(/28. February/i)).toBeTruthy();
  });

  it('should render DaySummary component with the correct month', () => {
    const { getByText } = renderWithContext(<DaySummary />, {
      selectedForecast: FORECAST,
    });
    expect(getByText(/28. February/i)).toBeTruthy();
  });

  it('should render DaySummary component with the correct place', () => {
    const { getByText } = renderWithContext(<DaySummary />, {
      selectedForecast: FORECAST,
    });
    expect(getByText(/Munich/i)).toBeTruthy();
  });
});
