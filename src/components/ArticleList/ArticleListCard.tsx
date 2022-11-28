import { Card, Col, Row } from "antd";

import { PinProps } from "../../utils/interfaces";
import ArticleDetailLink from "../common/ArticleDetailLink";

import styles from "./ArticleListCard.module.scss";

interface ArticleListCardProps extends PinProps {
  project?: string;
  title: string;
  views: number;
}

function ArticleListCard(props: ArticleListCardProps) {
  const { pins, project, title, togglePin, views } = props;
  const isArticlePinned = !!(title in pins);

  function handleToggle() {
    togglePin(title, project);
  }

  return (
    <Card className={styles.root}>
      <Row className={styles.row}>
        <Col className={styles["title-section"]} span={12}>
          <ArticleDetailLink
            title={title}
            project={project}
            isArticlePinned={isArticlePinned}
            handleToggle={handleToggle}
          />
        </Col>
        <Col className={styles.content} span={12}>
          <b>Views:</b>
          <p>{Intl.NumberFormat().format(views)}</p>
        </Col>
      </Row>
    </Card>
  );
}

export default ArticleListCard;
