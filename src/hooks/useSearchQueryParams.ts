import { useSearchParams } from "react-router-dom";

export function useSearchQueryParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  function getParam(paramId: string): string | null {
    return searchParams.get(paramId);
  }

  function updateParam(paramId: string, value?: string | null): void {
    if (value) {
      searchParams.set(paramId, value);
      setSearchParams(searchParams);
    }
  }

  function removeParam(paramId: string): void {
    searchParams.delete(paramId);
    setSearchParams(searchParams);
  }

  return { getParam, updateParam, removeParam };
}
