import { Card, Col, Row } from "antd";

interface ArticleDetailCardProps {
  title: string;
  views: number;
}

function ArticleDetailCard(props: ArticleDetailCardProps) {
  const { title, views } = props;

  return (
    <Card>
      <Row>
        <Col span={12}>
          <p>{title}</p>
        </Col>
        <Col span={12}>
          <b>Views:</b>
          <p>{Intl.NumberFormat().format(views)}</p>
        </Col>
      </Row>
    </Card>
  );
}

export default ArticleDetailCard;
