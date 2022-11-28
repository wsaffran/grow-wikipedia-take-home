import { AxiosRequestConfig } from "axios";
import dayjs from "dayjs";
import { useQuery } from "react-query";

import { DATE_FORMAT_API } from "../utils/constants";
import { ArticleData, RawTopArticlesData } from "../utils/interfaces";

import { makeRequest } from "./makeRequest";

const wikimediaBaseUrl = "https://wikimedia.org/api/rest_v1/metrics/pageviews";

function get(url: string, options?: AxiosRequestConfig<any>) {
  return makeRequest(url, { ...options, method: "GET" });
}

// REQUEST FUNCTIONS
function getTopArticles(date: string, country?: string | null) {
  if (country) return _getTopArticlseByDateAndCountry(date, country);
  return _getTopArticlesByDate(date);
}

function _getTopArticlesByDate(date: string) {
  const endpoint = wikimediaBaseUrl + `/top/en.wikipedia/all-access/${date}`;

  return get(endpoint);
}

function _getTopArticlseByDateAndCountry(date: string, country: string) {
  const endpoint =
    wikimediaBaseUrl + `/top-per-country/${country}/all-access/${date}`;

  return get(endpoint);
}

// HOOKS
function useTopArticlesData(date: string | null, country?: string | null) {
  const formattedDate = dayjs(date).format(DATE_FORMAT_API);

  return useQuery({
    enabled: !!date,
    queryKey: ["articles", formattedDate, country],
    queryFn: () => getTopArticles(formattedDate, country),
    select: (data: RawTopArticlesData): ArticleData[] => data.items[0].articles,
  });
}

export { useTopArticlesData };
