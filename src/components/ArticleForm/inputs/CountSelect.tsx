import { Col, Select } from "antd";

import { ARTICLE_COUNT_OPTIONS, INPUT_WIDTH } from "../../utils/constants";
import { useSearchQueryParams } from "../../../hooks/useSearchQueryParams";

function CountSelect() {
  const { getParam, updateParam } = useSearchQueryParams();

  function handleCountChange(count: string | null) {
    updateParam("count", count);
  }

  return (
    <Col>
      <label>Number of Results</label>
      <Select
        onChange={handleCountChange}
        options={ARTICLE_COUNT_OPTIONS}
        style={{ width: INPUT_WIDTH }}
        value={getParam("count")}
      />
    </Col>
  );
}

export default CountSelect;
