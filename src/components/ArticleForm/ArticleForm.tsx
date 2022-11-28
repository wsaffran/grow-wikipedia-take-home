import { Row } from "antd";

import CountrySelect from "./inputs/CountrySelect";
import CountSelect from "./inputs/CountSelect";
import DateInput from "./inputs/DateInput";

function ArticleForm() {
  return (
    <Row>
      <DateInput />
      <CountSelect />
      <CountrySelect />
    </Row>
  );
}

export default ArticleForm;
