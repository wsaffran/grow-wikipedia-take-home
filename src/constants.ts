import {
  getFirstOfMonth,
  getToday,
  getYesterday,
  mapValueToKeyAndValue,
} from "./utils";

export const DATE_FORMAT_API = "YYYY/MM/DD";
export const DATE_FORMAT_PARAM = "YYYY-MM-DD";
export const DATE_FORMAT_USER = "MM/DD/YYYY";

export const FIRST_OF_MONTH = getFirstOfMonth();
export const TODAY = getToday();
const YESTERDAY = getYesterday();

const DEFAULT_COUNT = "100";

export const DEFAULT_QUERY_PARAMS = {
  date: YESTERDAY.format(DATE_FORMAT_PARAM),
  count: DEFAULT_COUNT,
};

const ARTICLE_COUNTS = [25, 50, 75, 100, 200];
export const ARTICLE_COUNT_OPTIONS = mapValueToKeyAndValue(ARTICLE_COUNTS);

export const INPUT_WIDTH = 120;
