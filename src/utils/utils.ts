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

export function mapValueToKeyAndValue(
  array: Array<string | number>
): { [key: string]: string | number }[] {
  return array.map((key: string | number) => ({ value: key, label: key }));
}

export function formatTitle(title: string) {
  return title.replaceAll("_", " ");
}
