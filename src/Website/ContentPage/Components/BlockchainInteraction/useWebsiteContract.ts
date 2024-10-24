import { BigNumber } from "ethers";
import { useState, useContext, useMemo } from "react";
import { useEffect } from "react";
import {
    Ethers,
    parseBigNumberToString,
    WalletContext,
} from "../../../../Web3";
import { websiteContract } from "../../../Contracts/websiteContract";

interface UserResponse {
    upVoted: boolean,
    message: string,
}

interface WebsiteData {
    totalUpvote: string,
    userResponse: UserResponse,
    sendUserResponse: (text: string) => Promise<any>
}

const EMPTY_STRING: string = "";
const EMPTY_RESPONSE: UserResponse = {
    upVoted: false,
    message: EMPTY_STRING,
}

// Custom react hook to fetch website data from the blockchain through deployed smart contract.
function useWebsiteContract(projectNumber: number): WebsiteData {
    const [totalUpvote, setTotalUpvote] = useState<string>(EMPTY_STRING);
    const [userResponse, setUserResponse] = useState<UserResponse>(EMPTY_RESPONSE);

    const { walletProvider } = useContext(WalletContext);
    const { getWrappedProvider, getContract } = Ethers();

    const contract = useMemo(() => {
        if (walletProvider) {
            const wrappedProvider = getWrappedProvider(walletProvider);
            const signer = wrappedProvider.getSigner();
            return getContract(websiteContract.address, websiteContract.abi, signer);
        }
    }, [walletProvider]);

    useEffect(() => {
        setTotalUpvote(EMPTY_STRING);
        setUserResponse(EMPTY_RESPONSE);

        return () => {
            setTotalUpvote(EMPTY_STRING);
            setUserResponse(EMPTY_RESPONSE);
        };
    }, [projectNumber]);

    useEffect(() => {
        if (contract) {
            contract
                .getNumberOfProjectApproval(projectNumber)
                .then((res: BigNumber) => {
                    setTotalUpvote(parseBigNumberToString(res));
                })
                .catch((error: Error) => console.log(error));

            contract
                .getUserApprovalForProject(projectNumber)
                .then((res: UserResponse) => {
                    setUserResponse(res);
                })
                .catch((error: Error) => console.log(error));
        }

        return () => {
            setTotalUpvote(EMPTY_STRING);
            setUserResponse(EMPTY_RESPONSE);
        };
    }, [contract, projectNumber]);

    const sendUserResponse = async (text: string) => {
        if (contract) {
            return await contract.addUserApproval(projectNumber, text);
        }
        return null;
    };

    return {
        totalUpvote,
        userResponse,
        sendUserResponse,
    };
}

export { useWebsiteContract };