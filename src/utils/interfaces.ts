interface BaseArticle {
  article: string;
  project?: string;
  rank: number;
}

interface ArticleWithViews extends BaseArticle {
  views: number;
  views_ceil?: never;
}

interface ArticleWithViewsCeil extends BaseArticle {
  views_ceil: number;
  views?: never;
}

export type ArticleData = ArticleWithViews | ArticleWithViewsCeil;

interface TopArticlesData {
  access: string;
  articles: ArticleData[];
  country?: string;
  day: string;
  month: string;
  project?: string;
  year: string;
}

export interface RawTopArticlesData {
  items: TopArticlesData[];
}

export interface ArticleSummary {
  title: string;
  extract_html: string;
}

interface RawPageViewData {
  access: string;
  agent: string;
  article: string;
  granularity: string;
  project: string;
  timestamp: string;
  views: number;
}

export interface RawPageViewResponse {
  items: RawPageViewData[];
}

export interface PageViewData {
  timestamp: string;
  views: number;
}

export type Pin = {
  [key: string]: string;
};

export interface PinProps {
  pins: Pin;
  togglePin: (pinTitle: string, project?: string) => void;
}
