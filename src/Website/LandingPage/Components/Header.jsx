import React from "react";
import WalletButton from "./WalletButton";
import "../scss/Header.scss";
export default function Header(props) {
    const {logo, name} = props;
  return (
    <div className="header-container">
      <div className="logo-container">
        {/* Image logo here */}
        <img className="logo-container__logo" src={logo} alt="logo"/>
        <div className="logo-container__name"> {name} </div>
      </div>
      <WalletButton src={process.env.PUBLIC_URL + "/wallet.svg"}/>
    </div>
  );
}
