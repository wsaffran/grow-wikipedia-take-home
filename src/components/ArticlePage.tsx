import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { DEFAULT_QUERY_PARAMS } from "../constants";
import { useTopArticlesData } from "../services/articlesService";

import ArticleForm from "./ArticleForm/ArticleForm";

function ArticlePage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const dateParam = searchParams.get("date");

  const { data: articles } = useTopArticlesData(dateParam);

  useEffect(() => {
    function setDefaultParams(): void {
      const dateParam = searchParams.get("date");

      if (!dateParam) {
        setSearchParams(DEFAULT_QUERY_PARAMS);
      }
    }

    setDefaultParams();
  }, [setSearchParams, searchParams]);

  return (
    <div>
      <ArticleForm />
    </div>
  );
}

export default ArticlePage;
