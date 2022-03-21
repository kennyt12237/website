import React from 'react';
import WithMetamask from '../../Web3/HigherOrderComponents/WithMetamask';
import MetamaskButton from './MetamaskButton';
import '../scss/Header.scss';

export default function Header(props) {

    return (
			<div className='root-container'>
				<div className='logo-container'>
					{/* Image logo here */}
					<div className='logo-container__logo'> </div>
					<div className='logo-container__name'> </div>
				</div>
					<WithMetamask>
						<MetamaskButton />
					</WithMetamask>
			</div>
    )
}