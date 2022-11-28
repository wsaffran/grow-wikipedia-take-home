import { Col } from "antd";

import { PinProps } from "../../utils/interfaces";

import ArticleDetailLink from "../common/ArticleDetailLink";

import styles from "./PinnedArticle.module.css";

interface PinnedArticleProps {
  pin: string[];
  togglePin: PinProps["togglePin"];
}

function PinnedArticle(props: PinnedArticleProps) {
  const {
    pin: [title, project],
  } = props;

  function togglePin() {
    props.togglePin(title);
  }

  return (
    <Col className={styles.root}>
      <ArticleDetailLink
        title={title}
        project={project}
        isArticlePinned={true}
        handleToggle={togglePin}
      />
    </Col>
  );
}

export default PinnedArticle;
