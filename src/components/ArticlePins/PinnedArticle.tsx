import { Col } from "antd";

import { PinProps } from "../../utils/interfaces";

import ArticleDetailLink from "../common/ArticleDetailLink";

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
    <Col>
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
