import { AxiosRequestConfig } from "axios";
import dayjs from "dayjs";
import { useQuery } from "react-query";

import {
  DATE_FORMAT_API,
  DATE_FORMAT_PAGE_VIEWS_API,
  FIRST_OF_MONTH,
  TODAY,
} from "../utils/constants";
import {
  ArticleData,
  ArticleSummary,
  PageViewData,
  RawPageViewResponse,
  RawTopArticlesData,
} from "../utils/interfaces";

import { makeRequest } from "./makeRequest";

const wikimediaBaseUrl = "https://wikimedia.org/api/rest_v1/metrics/pageviews";
const wikipediaBaseUrl = "https://en.wikipedia.org/api/rest_v1/page/summary";

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

function fetchTopDaysThisMonth(title: string, project: string) {
  const startDate = FIRST_OF_MONTH.format(DATE_FORMAT_PAGE_VIEWS_API) + "00";
  const endDate = TODAY.format(DATE_FORMAT_PAGE_VIEWS_API) + "00";
  const wikiProject = project || "en.wikipedia";

  const endpoint =
    wikimediaBaseUrl +
    `/per-article/${wikiProject}/all-access/all-agents/${title}/daily/${startDate}/${endDate}`;

  return get(endpoint);
}

function fetchArticleDetail(title: string) {
  const endpoint = wikipediaBaseUrl + `/${title}`;
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

function useArticleMonthlyPageViewData(title: string, project: string) {
  function processRawMonthlyPageViewData(
    data: RawPageViewResponse
  ): PageViewData[] {
    return data.items
      .map((item: any) => ({ timestamp: item.timestamp, views: item.views }))
      .sort((a: any, b: any) => b.views - a.views)
      .slice(0, 3);
  }

  return useQuery({
    enabled: !!title,
    queryKey: ["article-pageviews", title],
    queryFn: () => fetchTopDaysThisMonth(title, project),
    select: processRawMonthlyPageViewData,
  });
}

function useArticleSummaryData(title: string) {
  function processRawArticleDetailData(data: any): ArticleSummary {
    return Object.assign(
      {},
      { title: data.title, extract_html: data.extract_html }
    );
  }

  return useQuery({
    enabled: !!title,
    queryKey: ["article-summary", title],
    queryFn: () => fetchArticleDetail(title),
    select: processRawArticleDetailData,
  });
}

export {
  useTopArticlesData,
  useArticleMonthlyPageViewData,
  useArticleSummaryData,
};
