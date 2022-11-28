export interface ArticleData {
  article: string;
  rank: number;
  views: number;
}

interface TopArticlesData {
  access: string;
  articles: ArticleData[];
  day: string;
  month: string;
  project: string;
  year: string;
}

export interface RawTopArticlesData {
  items: TopArticlesData[];
}
