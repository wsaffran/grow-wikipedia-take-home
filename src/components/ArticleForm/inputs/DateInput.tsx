import { DatePicker } from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";

import {
  DATE_FORMAT_PARAM,
  DATE_FORMAT_USER,
  INPUT_WIDTH,
} from "../../../utils/constants";
import { useSearchQueryParams } from "../../../hooks/useSearchQueryParams";

import InputWrapper from "./InputWrapper";

function DateInput() {
  const disabledDates: RangePickerProps["disabledDate"] = (
    current: dayjs.Dayjs
  ): boolean => {
    if (current) {
      const startDate = dayjs("2015/07/01").subtract(1, "day").endOf("day");
      const endDate = dayjs().startOf("day");

      return current < startDate || current >= endDate;
    }

    return false;
  };

  const { getParam, updateParam } = useSearchQueryParams();

  function handleDateChange(date: dayjs.Dayjs | null): void {
    updateParam("date", date?.format(DATE_FORMAT_PARAM));
  }

  return (
    <InputWrapper label="Date">
      <DatePicker
        allowClear={false}
        value={dayjs(getParam("date"))}
        onChange={handleDateChange}
        format={DATE_FORMAT_USER}
        style={{ width: INPUT_WIDTH }}
        disabledDate={disabledDates}
        showToday={false}
      />
    </InputWrapper>
  );
}

export default DateInput;
