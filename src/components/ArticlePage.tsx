import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { omit } from "lodash";

import {
  getPinsFromStorage,
  setPinsToStorage,
} from "../localStorage/pinLocalStorage";
import { useTopArticlesData } from "../services/articlesService";
import { DEFAULT_COUNT, DEFAULT_QUERY_PARAMS } from "../utils/constants";
import { Pin } from "../utils/interfaces";

import ArticleForm from "./ArticleForm/ArticleForm";
import ArticleList from "./ArticleList/ArticleList";
import PinnedArticleList from "./ArticlePins/PinnedArticleList";
import LoadingErrorDisplay from "./common/LoadingErrorDisplay";

function ArticlePage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const dateParam = searchParams.get("date");
  const countParam = parseInt(searchParams.get("count") || DEFAULT_COUNT);
  const countryParam = searchParams.get("country");

  const {
    data: articles,
    isLoading,
    isError,
  } = useTopArticlesData(dateParam, countryParam);

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

  const [pins, setPins] = useState<Pin>(getPinsFromStorage());

  function togglePin(pinTitle: string, project?: string) {
    if (pinTitle in pins) {
      setPins({ ...omit(pins, pinTitle) });
    } else {
      setPins({ ...pins, [pinTitle]: project || "en.wikipedia" });
    }
  }

  useEffect(() => {
    setPinsToStorage(pins);
  }, [pins]);

  return (
    <div>
      <ArticleForm />
      <PinnedArticleList pins={pins} togglePin={togglePin} />
      {!!articles ? (
        <ArticleList
          articles={articles.slice(0, countParam)}
          pins={pins}
          togglePin={togglePin}
        />
      ) : (
        <LoadingErrorDisplay
          loadingStates={[isLoading]}
          errorStates={[isError]}
          errorText="No articles for this search :("
        />
      )}
    </div>
  );
}

export default ArticlePage;
