import { Col } from "antd";

import { ArticleData } from "../../utils/interfaces";

import ArticleListCard from "./ArticleListCard";

interface ArticleListProps {
  articles: ArticleData[];
}

function ArticleList(props: ArticleListProps) {
  const { articles } = props;

  return (
    <Col>
      {articles.map((article: ArticleData, key: number) => {
        const { article: title, views, views_ceil } = article;

        return (
          <ArticleListCard
            key={key}
            title={title}
            views={views || views_ceil}
          />
        );
      })}
    </Col>
  );
}

export default ArticleList;
