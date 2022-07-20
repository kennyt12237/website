import React, { useMemo } from "react";
import Loading from "./Loading";
import WriteAndUpvoteWeb3 from "./WriteAndUpvoteWeb3";
import { useWebsiteContract } from "./useWebsiteContract";

export default function ProjectForm(props) {
  const { title, defaultText, imageUrl, projectNumber } = props;
  const { totalUpvote, userResponse, sendUserResponse } = useWebsiteContract(
    projectNumber
  );

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
        totalUpvote={totalUpvote}
        userResponse={userResponse}
        sendUserResponse={sendUserResponse}
      />
    </Loading>
  );
}
