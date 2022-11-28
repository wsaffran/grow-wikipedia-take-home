import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { DEFAULT_QUERY_PARAMS } from "../utils/constants";
import { useTopArticlesData } from "../services/articlesService";

import ArticleForm from "./ArticleForm/ArticleForm";

function ArticlePage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const dateParam = searchParams.get("date");
  const countryParam = searchParams.get("country");

  const { data: articles } = useTopArticlesData(dateParam, countryParam);

  useEffect(() => {
    function setDefaultParams(): void {
      const date = searchParams.get("date");
      const count = searchParams.get("count");

      if (!date || !count) {
        if (!date) searchParams.set("date", DEFAULT_QUERY_PARAMS.date);
        if (!count) searchParams.set("count", DEFAULT_QUERY_PARAMS.count);
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
