import { QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { queryClient } from "./services/queryClient";

function AppWrapper() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default AppWrapper;
