import { Col, Select } from "antd";

import { useSearchQueryParams } from "../../../hooks/useSearchQueryParams";
import { INPUT_WIDTH } from "../../../utils/constants";
import { COUNTRY_OPTIONS } from "../../../utils/constants";

function CountrySelect() {
  const { getParam, updateParam, removeParam } = useSearchQueryParams();

  function handleCountryChange(country?: string) {
    updateParam("country", country);
  }

  function handleOnClear() {
    removeParam("country");
  }

  return (
    <Col>
      <label>Country</label>
      <Select
        allowClear
        defaultActiveFirstOption={false}
        onChange={handleCountryChange}
        onClear={handleOnClear}
        options={COUNTRY_OPTIONS}
        placeholder="Country"
        style={{ width: INPUT_WIDTH }}
        value={getParam("country")}
      />
    </Col>
  );
}

export default CountrySelect;
