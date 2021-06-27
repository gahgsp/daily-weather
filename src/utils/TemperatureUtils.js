export default class TemperatureUtils {
  static fromKelvinToCelsius(temperature) {
    return Math.trunc(Number(temperature) - 273.15) + '°';
  }
}
