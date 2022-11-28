interface ErrorDisplayProps {
  errorStates: boolean[];
  errorText?: string;
}

function ErrorDisplay(props: ErrorDisplayProps) {
  const { errorText, errorStates } = props;
  const defaultErrorText = "Error";

  if (errorStates.includes(true))
    return <h2>{errorText || defaultErrorText}</h2>;

  return null;
}

export default ErrorDisplay;
