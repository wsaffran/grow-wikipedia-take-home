import { Row } from "antd";

import CountSelect from "./inputs/CountSelect";
import DateInput from "./inputs/DateInput";

function ArticleForm() {
  return (
    <Row>
      <DateInput />
      <CountSelect />
    </Row>
  );
}

export default ArticleForm;
