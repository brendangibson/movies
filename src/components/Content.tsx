import React, { Suspense } from "react";
import Results from "./Results";
import ResultsErrorBoundary from "./ResultsErrorBoundary";

/**
 * Main content section of the page
 */
const Content = () => {
  return (
    <div className="p-2">
      <ResultsErrorBoundary>
        {/* TODO: make the loading prettier */}
        <Suspense fallback="Loading...">
          <Results />
        </Suspense>
      </ResultsErrorBoundary>
    </div>
  );
};

export default Content;
