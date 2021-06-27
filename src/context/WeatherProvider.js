import moment from 'moment';
import { Component } from 'react';
import openWeather from '../api/openWeather';
import ClearDay from '../assets/icons/clear.svg';
import BrokenCloudsDay from '../assets/icons/cloudy.svg';
import ClearNight from '../assets/icons/nt_clear.svg';
import BrokenCloudsNight from '../assets/icons/nt_cloudy.svg';
import FewCloudsNight from '../assets/icons/nt_partlycloudy.svg';
import LightRainNight from '../assets/icons/nt_rain.svg';
import FewCloudsDay from '../assets/icons/partlycloudy.svg';
import LightRainDay from '../assets/icons/rain.svg';
import Loader from '../components/Loader/Loader';
import DateUtils from '../utils/DateUtils';
import TemperatureUtils from '../utils/TemperatureUtils';
import WeatherContext from './WeatherContext';

const WEATHER_CONDITION_ICONS = [
  {
    id: '01d',
    source: ClearDay,
  },
  {
    id: '01n',
    source: ClearNight,
  },
  {
    id: '02d',
    source: FewCloudsDay,
  },
  {
    id: '02n',
    source: FewCloudsNight,
  },
  {
    id: '04d',
    source: BrokenCloudsDay,
  },
  {
    id: '04n',
    source: BrokenCloudsNight,
  },
  {
    id: '10d',
    source: LightRainDay,
  },
  {
    id: '10n',
    source: LightRainNight,
  },
];

class WeatherProvider extends Component {
  state = {
    forecasts: [],
    selectedForecast: null,
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const response = await openWeather.get('/forecast', {
      params: {
        q: 'München,DE',
        appid: 'b6907d289e10d714a6e88b30761fae22',
      },
    });
    this.setState({ forecasts: this.buildForecasts(response.data.list), isLoading: false });
  }

  buildForecasts(forecasts) {
    return forecasts.map((forecast) => {
      const date = moment(forecast.dt_txt, 'YYYY-MM-DD hh:mm:ss');
      return {
        id: forecast.dt,
        hour: DateUtils.retrieveHoursAndMinutesFromDate(date),
        weatherIcon: WEATHER_CONDITION_ICONS.find((image) => image.id === forecast.weather[0].icon).source,
        temperature: TemperatureUtils.fromKelvinToCelsius(forecast.main.temp),
        minTemperature: TemperatureUtils.fromKelvinToCelsius(forecast.main.temp_min),
        maxTemperature: TemperatureUtils.fromKelvinToCelsius(forecast.main.temp_max),
        weatherCondition: forecast.weather[0].main,
        dayOfWeek: DateUtils.retrieveDayOfWeekFromDate(date),
        month: DateUtils.retrieveMonthFromDate(date),
        dayNumber: DateUtils.retrieveDayFromDate(date),
      };
    });
  }

  render() {
    return (
      <WeatherContext.Provider
        value={{
          forecasts: this.state.forecasts,
          selectedForecast: this.state.selectedForecast,
          selectForecast: (forecast) => {
            const newSelectedForecast = forecast;
            this.setState({ selectedForecast: newSelectedForecast });
          },
        }}
      >
        {this.state.isLoading ? <Loader /> : this.props.children}
      </WeatherContext.Provider>
    );
  }
}

export default WeatherProvider;
