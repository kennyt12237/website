import React, { useMemo } from "react";
import Loading from "./Loading";
import WriteAndUpvoteWeb3 from "./WriteAndUpvoteWeb3";
import { useWebsiteContract } from "./useWebsiteContract";
import { useNotification } from "../../../Notification";

export default function ProjectForm(props) {
  const { title, defaultText, imageUrl, projectNumber } = props;
  const { totalUpvote, userResponse, sendUserResponse } = useWebsiteContract(
    projectNumber
  );
  const { successAlert, failedAlert } = useNotification();

  const loading = useMemo(() => {
    if (totalUpvote && userResponse) {
      return false;
    }
    return true;
  }, [totalUpvote, userResponse]);

  const wrappedSendUserResponse = (text) => {
    sendUserResponse(text)
      .then((res) => {
        successAlert("Transaction successfully sent!");
      })
      .catch((error) => {
        failedAlert(error.message);
      });
  };

  return (
    <Loading loading={loading}>
      <WriteAndUpvoteWeb3
        title={title}
        defaultText={defaultText}
        imageUrl={imageUrl}
        projectNumber={projectNumber}
        totalUpvote={totalUpvote}
        userResponse={userResponse}
        sendUserResponse={wrappedSendUserResponse}
      />
    </Loading>
  );
}
