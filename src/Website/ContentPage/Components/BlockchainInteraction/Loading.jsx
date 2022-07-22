import React, { useMemo } from "react";
import "./scss/Loading.scss";

// A higher order component to display a loading indication for a state variable.
export default function Loading(props) {
  const { children, loading } = props;

  const isLoading = useMemo(() => {
    return loading;
  }, [loading]);

  return isLoading ? (
    <div className="loading-container">
      <div className="loading-container--text-size">Loading ... </div>
    </div>
  ) : (
    <div> {children} </div>
  );
}
