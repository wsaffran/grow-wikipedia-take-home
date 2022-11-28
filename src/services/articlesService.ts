import { AxiosRequestConfig } from "axios";
import dayjs from "dayjs";
import { useQuery } from "react-query";

import { DATE_FORMAT_API } from "../constants";
import { ArticleData, RawTopArticlesData } from "../interfaces";

import { makeRequest } from "./makeRequest";

const wikimediaBaseUrl = "https://wikimedia.org/api/rest_v1/metrics/pageviews";

function get(url: string, options?: AxiosRequestConfig<any>) {
  return makeRequest(url, { ...options, method: "GET" });
}

// REQUEST FUNCTIONS
function getTopArticles(date: string | null) {
  const endpoint = wikimediaBaseUrl + `/top/en.wikipedia/all-access/${date}`;

  return get(endpoint);
}

// HOOKS
function useTopArticlesData(date: string | null) {
  const formattedDate = dayjs(date).format(DATE_FORMAT_API);

  return useQuery({
    enabled: !!date,
    queryKey: ["articles", formattedDate],
    queryFn: () => getTopArticles(formattedDate),
    select: (data: RawTopArticlesData): ArticleData[] => data.items[0].articles,
  });
}

export { useTopArticlesData };
