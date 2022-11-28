import { getFirstOfMonth, getToday, getYesterday } from "./utils";

export const DATE_FORMAT_API = "YYYY/MM/DD";
export const DATE_FORMAT_PARAM = "YYYY-MM-DD";
export const DATE_FORMAT_USER = "MM/DD/YYYY";

export const FIRST_OF_MONTH = getFirstOfMonth();
export const TODAY = getToday();
const YESTERDAY = getYesterday();

export const DEFAULT_QUERY_PARAMS = {
  date: YESTERDAY.format(DATE_FORMAT_PARAM),
};

export const INPUT_WIDTH = 120;
