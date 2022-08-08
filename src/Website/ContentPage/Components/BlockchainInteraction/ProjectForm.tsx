import React, { useMemo } from "react";
import Loading from "./Loading";
import WriteAndUpvoteWeb3 from "./WriteAndUpvoteWeb3";
import { useWebsiteContract } from "./useWebsiteContract";
import { useNotification } from "../../../../Notification";

interface Props {
  title: string;
  defaultText: string;
  imageUrl: string;
  projectNumber: number;
}
export default function ProjectForm({
  title,
  defaultText,
  imageUrl,
  projectNumber,
}: Props): JSX.Element {
  const { totalUpvote, userResponse, sendUserResponse } = useWebsiteContract(
    projectNumber
  );
  const { successAlert, failedAlert } = useNotification();

  const loading: boolean = useMemo(() => {
    if (totalUpvote && userResponse) {
      return false;
    }
    return true;
  }, [totalUpvote, userResponse]);

  const wrappedSendUserResponse = (text: string): void => {
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
        totalUpvote={totalUpvote}
        userResponse={userResponse}
        sendUserResponse={wrappedSendUserResponse}
      />
    </Loading>
  );
}
