import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { WalletContext } from '../Web3/context/WalletContextProvider';

export default function LoginRoute() {

	const { getConnectedStatus  } = useContext(WalletContext);

	return getConnectedStatus() ? <Outlet /> : <Navigate to="/" />
}