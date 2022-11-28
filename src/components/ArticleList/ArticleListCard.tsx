import { Card, Col, Row } from "antd";

import ArticleLink from "../common/ArticleDetailLink";

interface ArticleListCardProps {
  project?: string;
  title: string;
  views: number;
}

function ArticleListCard(props: ArticleListCardProps) {
  const { project, title, views } = props;

  return (
    <Card>
      <Row>
        <Col span={12}>
          <ArticleLink title={title} project={project} />
        </Col>
        <Col span={12}>
          <b>Views:</b>
          <p>{Intl.NumberFormat().format(views)}</p>
        </Col>
      </Row>
    </Card>
  );
}

export default ArticleListCard;
