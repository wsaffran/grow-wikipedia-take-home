import { render } from "@testing-library/react";

import AppWrapper from "./AppWrapper";

describe("App", () => {
  it("Redirects to articles page", () => {
    render(<AppWrapper />);

    expect(global.location.pathname).toBe("/articles");
  });
});
