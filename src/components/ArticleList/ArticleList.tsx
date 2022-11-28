import { Col } from "antd";

import { ArticleData, PinProps } from "../../utils/interfaces";

import ArticleListCard from "./ArticleListCard";

interface ArticleListProps extends PinProps {
  articles: ArticleData[];
}

function ArticleList(props: ArticleListProps) {
  const { articles, ...passDownProps } = props;

  return (
    <Col>
      {articles.map((article: ArticleData, key: number) => {
        const { article: title, project, views, views_ceil } = article;

        return (
          <ArticleListCard
            key={key}
            project={project}
            title={title}
            views={views || views_ceil}
            {...passDownProps}
          />
        );
      })}
    </Col>
  );
}

export default ArticleList;
