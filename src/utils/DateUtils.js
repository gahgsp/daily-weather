/**
 * Provides helper functions to work with date.
 */
export default class DateUtils {
  /**
   * Returns a formatted String with the mask "hh:mm" from a date object.
   * @param date The date that will be formatted.
   * @returns a String formatted with the mask "hh:mm".
   */
  static retrieveHoursAndMinutesFromDate(date) {
    return date.format('hh:mm');
  }

  /**
   * Returns the name of the day from a date object.
   * @param date The date that will be used to retrieve the name of the day.
   * @returns the name of the day in the week.
   */
  static retrieveDayOfWeekFromDate(date) {
    return date.format('dddd');
  }

  /**
   * Returns the name of the month from a date object.
   * @param date The date that will be used to retrieve the name of the month.
   * @returns the name of the month from the date.
   */
  static retrieveMonthFromDate(date) {
    return date.format('MMMM');
  }

  /**
   * Returns the numeric number of the day in the month.
   * @param date The date that will be used to retrieve the day in the month.
   * @returns the numeric number of the day in the given date.
   */
  static retrieveDayFromDate(date) {
    return date.date();
  }
}
