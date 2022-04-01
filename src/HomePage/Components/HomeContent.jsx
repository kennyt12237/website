import React from "react";
import "../scss/HomeContent.scss";

export default function HomeContent(props) {
  return (
    <div className="info-container">
      <div className="info-container__image"></div>
      <div className="info-container__content">
        <div className="info-container__content__greeting">Hello!</div>
        <div className="info-container__content__statement">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <div className="info-container__content__contact">
          <div className="info-container__content__contact__wallet">
            <img
              className="info-container__content__contact__wallet__image"
              src="metamask.png"
              alt="Metamask Logo"
            />
            Wallet address: E9873D79C6D87DC0FB6A5778633389F445
          </div>
          <div className="info-container__content__contact__social">
            <img src={"./linkedin.svg"} alt="linkedIn" />
            <img src={"./twitter.svg"} alt="twitter" />
            <img src={"./telegram.svg"} alt="telegram" />
            <img src={"./medium.svg"} alt="medium" />
          </div>
        </div>
      </div>
    </div>
  );
}
