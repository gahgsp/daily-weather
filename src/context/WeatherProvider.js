import React from 'react';
import openWeather from '../api/openWeather';
import ClearDay from '../assets/icons/clear.svg';
import ClearNight from '../assets/icons/nt_clear.svg';
import FewCloudsDay from '../assets/icons/partlycloudy.svg';
import FewCloudsNight from '../assets/icons/nt_partlycloudy.svg';
import BrokenCloudsDay from '../assets/icons/cloudy.svg';
import BrokenCloudsNight from '../assets/icons/nt_cloudy.svg';
import LightRainDay from '../assets/icons/rain.svg';
import LightRainNight from '../assets/icons/nt_rain.svg';
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

class WeatherProvider extends React.Component {
  state = {
    forecasts: [],
    selectedForecast: null,
  };

  async componentDidMount() {
    const response = await openWeather.get('/forecast', {
      params: {
        q: 'München,DE',
        appid: 'b6907d289e10d714a6e88b30761fae22',
      },
    });
    this.setState({ forecasts: this.buildForecasts(response.data.list) });
  }

  buildForecasts(forecasts) {
    return forecasts.map((forecast) => {
      return {
        id: forecast.dt,
        hour: forecast.dt_txt.substring(11, 16),
        weatherIcon: WEATHER_CONDITION_ICONS.find((image) => image.id === forecast.weather[0].icon).source,
        temperature: this.fromKelvinToCelsius(forecast.main.temp),
        minTemperature: this.fromKelvinToCelsius(forecast.main.temp_min),
        maxTemperature: this.fromKelvinToCelsius(forecast.main.temp_max),
        weatherCondition: forecast.weather[0].main,
      };
    });
  }

  fromKelvinToCelsius(temperature) {
    return Math.trunc(Number(temperature) - 273.15) + '°';
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
        {this.props.children}
      </WeatherContext.Provider>
    );
  }
}

export default WeatherProvider;
