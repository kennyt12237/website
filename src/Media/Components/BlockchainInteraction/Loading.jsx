import React, { useMemo } from "react";

// A higher order component to display a loading indication for a state variable.
export default function Loading(props) {
  const { children, loading } = props;

  const isLoading = useMemo(() => {
    return loading;
  }, [loading]);

  return isLoading ? <div> Loading ... </div> : <div> {children} </div>;
}
