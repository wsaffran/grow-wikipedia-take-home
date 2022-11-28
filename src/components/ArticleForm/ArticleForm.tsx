import { Row } from "antd";

import CountrySelect from "./inputs/CountrySelect";
import CountSelect from "./inputs/CountSelect";
import DateInput from "./inputs/DateInput";

import styles from "./ArticleForm.module.css";

function ArticleForm() {
  return (
    <Row className={styles.root}>
      <DateInput />
      <CountSelect />
      <CountrySelect />
    </Row>
  );
}

export default ArticleForm;
