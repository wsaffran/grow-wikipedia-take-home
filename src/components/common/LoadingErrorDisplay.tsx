interface LoadingErrorDisplayProps {
  errorStates: boolean[];
  errorText?: string;
  loadingStates: boolean[];
  loadingText?: string;
}

function LoadingErrorDisplay(props: LoadingErrorDisplayProps) {
  const { errorText, loadingText, loadingStates, errorStates } = props;
  const defaultErrorText = "Error";
  const defaultLoadingText = "Loading...";

  if (errorStates.includes(true))
    return <h2>{errorText || defaultErrorText}</h2>;

  if (loadingStates.includes(true))
    return <h2>{loadingText || defaultLoadingText}</h2>;

  return null;
}

export default LoadingErrorDisplay;
