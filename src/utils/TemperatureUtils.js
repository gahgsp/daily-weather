/**
 * Provides helper functions to work with temperatures.
 */
export default class TemperatureUtils {
  /**
   * Converts a given temperature from Kelvin to Celsius.
   * @param temperature The temperature in Kelvin.
   * @returns the converted temperature in Celsius.
   */
  static fromKelvinToCelsius(temperature) {
    return Math.trunc(Number(temperature) - 273.15) + '°';
  }
}
