import { Select } from "antd";

import { ARTICLE_COUNT_OPTIONS, INPUT_WIDTH } from "../../../utils/constants";
import { useSearchQueryParams } from "../../../hooks/useSearchQueryParams";

import InputWrapper from "./InputWrapper";

function CountSelect() {
  const { getParam, updateParam } = useSearchQueryParams();

  function handleCountChange(count: string | null) {
    updateParam("count", count);
  }

  return (
    <InputWrapper label="Number of Results">
      <Select
        onChange={handleCountChange}
        options={ARTICLE_COUNT_OPTIONS}
        style={{ width: INPUT_WIDTH }}
        value={getParam("count")}
      />
    </InputWrapper>
  );
}

export default CountSelect;
