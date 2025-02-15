import React from "react";
import "../scss/HomeContent.scss";

export default function HomeContent(): JSX.Element {
  return (
    <div className="info-container">
      <div className="info-container__image">
        <img className="info-container__image" src={process.env.PUBLIC_URL + "/avatar.png"} alt="Avatar"/>
      </div>
      <div className="info-container__content">
        <div className="info-container__content__greeting-container">
          <div className="info-container__content__greeting-container__title">
            Hello!
          </div>

          <div className="info-container__content__greeting-container_message">
            <p>
              Welcome to my personal website showcasing my previous projects
              throughout my Software Engineering journey. I have studied the
              degree at the University of Auckland for 4 years and now looking
              for opportunities that triggers my curiosity.
            </p>
            <p>
              What sets my website apart traditionally is that it utilises Web3
              functionalities as you explore throughout the website, and will be
              continuously be updated later on. So, connect your wallet using
              Metamask to begin!
            </p>
          </div>
        </div>
        <div className="info-container__content__contact">
          <div className="info-container__content__contact__social">
            <a
              href="https://www.linkedin.com/in/kenny-tang-340431171"
              target="blank"
              rel="noreferrer"
            >
              <img
                src={process.env.PUBLIC_URL + "/icons/linkedin.svg"}
                alt="linkedIn"
              />
            </a>
            <a
              href="https://twitter.com/KennyTa06355885"
              target="blank"
              rel="noreferrer"
            >
              <img
                src={process.env.PUBLIC_URL + "/icons/twitter.svg"}
                alt="twitter"
              />
            </a>
            <a
              href="https://medium.com/@kennytang601"
              target="blank"
              rel="noreferrer"
            >
              <img src={process.env.PUBLIC_URL + "/icons/medium.svg"} alt="medium" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
