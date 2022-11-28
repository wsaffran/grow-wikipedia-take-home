import { Col, Select } from "antd";

function CountSelect() {
  return (
    <Col>
      <label>Number of Results</label>
      <Select style={{ width: 120 }} />
    </Col>
  );
}

export default CountSelect;
