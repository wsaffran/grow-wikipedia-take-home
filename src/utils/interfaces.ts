interface BaseArticle {
  article: string;
  rank: number;
}

interface ArticleWithViews extends BaseArticle {
  views: number;
  views_ceil: never;
}

interface ArticleWithViewsCeil extends BaseArticle {
  views_ceil: number;
  views: never;
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
