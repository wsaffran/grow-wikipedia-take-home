import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import ArticleList from "./ArticleList";

describe("Article List", () => {
  it("Renders", () => {
    const handleToggle = jest.fn(() => {});
    const articles = [
      {
        article: "Grow is Awesome!",
        rank: 1,
        views_ceil: 200000,
      },
      {
        article: "React is fun",
        rank: 2,
        views_ceil: 170000,
      },
      {
        article: "Have an awesome day!",
        rank: 3,
        views_ceil: 120000,
      },
    ];
    const pins = { "Grow is Awesome!": "en.wikipedia" };

    render(
      <ArticleList articles={articles} pins={pins} togglePin={handleToggle} />,
      { wrapper: BrowserRouter }
    );

    expect(screen.getByText(/Grow is Awesome/i)).toBeInTheDocument();
  });
});
