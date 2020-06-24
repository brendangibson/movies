import React, { ReactNode } from "react";

interface State {
  hasError: boolean;
}

interface Props {
  children: ReactNode;
}

/**
 * Error boundary for the results display
 */
class ResultsErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <h1>No results</h1>;
    }
    return this.props.children;
  }
}

export default ResultsErrorBoundary;
