import { Col, DatePicker } from "antd";

function DateInput() {
  return (
    <Col>
      <label>Date</label>
      <DatePicker allowClear={false} showToday={false} />
    </Col>
  );
}

export default DateInput;
