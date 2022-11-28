import { Col } from "antd";

import styles from "./InputWrapper.module.css";

interface InputWrapperProps {
  label: string;
  children: JSX.Element;
}

function InputWrapper(props: InputWrapperProps) {
  const { label, children } = props;

  return (
    <Col className={styles.input}>
      <label className={styles.label}>{label}</label>
      {children}
    </Col>
  );
}

export default InputWrapper;
