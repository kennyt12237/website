import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { WalletContext } from '../Web3/context/WalletContextProvider';

export default function ProtectedRoute(props) {

	const { children, redirectTo } = props;
	const { getConnectedStatus } = useContext(WalletContext);

	return  (
		getConnectedStatus() ? children : <Navigate to={redirectTo} />
	)
}