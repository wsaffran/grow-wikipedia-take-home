import { Select } from "antd";

import { useSearchQueryParams } from "../../../hooks/useSearchQueryParams";
import { INPUT_WIDTH } from "../../../utils/constants";
import { COUNTRY_OPTIONS } from "../../../utils/constants";

import InputWrapper from "./InputWrapper";

function CountrySelect() {
  const { getParam, updateParam, removeParam } = useSearchQueryParams();

  function handleCountryChange(country?: string) {
    updateParam("country", country);
  }

  function handleOnClear() {
    removeParam("country");
  }

  return (
    <InputWrapper label="Country">
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
    </InputWrapper>
  );
}

export default CountrySelect;
