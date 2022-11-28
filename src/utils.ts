import dayjs from "dayjs";

export function getToday() {
  return dayjs();
}

export function getYesterday() {
  return dayjs().subtract(1, "day");
}

export function getFirstOfMonth() {
  const today = getToday().date(1);

  return today;
}
