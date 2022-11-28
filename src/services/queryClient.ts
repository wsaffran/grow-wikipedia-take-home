import { QueryClient } from "react-query";

const queryClientConfig = {
  defaultOptions: {
    queries: {
      retry: 0,
      staleTime: Infinity,
      cacheTime: Infinity,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
};

export const queryClient = new QueryClient(queryClientConfig);
