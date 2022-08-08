import React, { useMemo } from "react";
import "./scss/Loading.scss";

interface Props {
  children: JSX.Element;
  loading: boolean;
}
// A higher order component to display a loading indication for a state variable.
export default function Loading({ children, loading }: Props): JSX.Element {
  const isLoading: boolean = useMemo(() => {
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
