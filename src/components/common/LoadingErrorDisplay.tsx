interface LoadingErrorDisplayProps {
  isLoading: boolean;
  isError: boolean;
}

function LoadingErrorDisplay(props: LoadingErrorDisplayProps) {
  const { isLoading, isError } = props;

  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>{"No articles for this search :("}</h2>}
    </>
  );
}

export default LoadingErrorDisplay;
