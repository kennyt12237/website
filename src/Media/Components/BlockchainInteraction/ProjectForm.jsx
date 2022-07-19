import React, { useMemo } from "react";
import Loading from "./Loading";
import { useWebsiteContract } from "./useWebsiteContract";
import WriteAndUpvoteWeb3 from "./WriteAndUpvoteWeb3";

export default function ProjectForm(props) {
  const { title, defaultText, imageUrl, projectNumber } = props;
  const { totalUpvote, userResponse } = useWebsiteContract(projectNumber);

  const loading = useMemo(() => {
    if (totalUpvote && userResponse) {
      return false;
    }
    return true;
  }, [totalUpvote, userResponse]);

  return (
    <Loading loading={loading}>
      <WriteAndUpvoteWeb3
        title={title}
        defaultText={defaultText}
        imageUrl={imageUrl}
        projectNumber={projectNumber}
      />
    </Loading>
  );
}
