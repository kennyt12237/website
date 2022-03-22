import React, { useContext, useEffect } from 'react';
import { Navigate,Outlet } from 'react-router-dom';
import { WalletContext } from '../Web3/context/WalletContextProvider';
import { Web3Context } from '../Web3/context/Web3ContextProvider';

export default function ProtectedRoute(props) {

	const { children, redirectTo } = props;
	const value = useContext(WalletContext);
	const { getWeb3 } = useContext(Web3Context);

	console.log(value);
	useEffect(() => {
		if (value) {
			console.log(value);
		}
	},[value])

	useEffect(() => {
		if (getWeb3()) {
			getWeb3();
		}
	},[getWeb3])

	return  (
		getWeb3() ? {children}  : <Navigate to="/" />
	)
}