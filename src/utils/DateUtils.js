export default class DateUtils {
  static retrieveHoursAndMinutesFromDate(date) {
    return date.format('hh:mm');
  }

  static retrieveDayOfWeekFromDate(date) {
    return date.format('dddd');
  }

  static retrieveMonthFromDate(date) {
    return date.format('MMMM');
  }

  static retrieveDayFromDate(date) {
    return date.date();
  }
}
