import React from "react";
import LogoImage from "../../static/img/EarnHome.png";
import Discord from "../../static/img/DiscordIcon";
import Twitter from "../../static/img/TwitterIcon";
import Button from "@mui/material/Button";
import HamBurger from "../../static/img/hamburger";
import CrossIconHamBurger from "../../static/img/CrossHamburger";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const Header = () => {
  const {
    siteConfig: {customFields},
  } = useDocusaurusContext();

  const myFunction = () => {
    var x = document.getElementById("myLinks");
    if (x.style.display === "flex") {
      x.style.display = "none";
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
      x.style.display = "flex";
    }
  }

  const signUpFunction = () =>{
    window.location.href = customFields.signupurl;
  }
  const loginFunction = () =>{
    window.location.href = customFields.loginurl;
  }

  return (
    <>
      <div className="header-container">
        <a href="/" className="header-image-anchor">
          <img
            src={LogoImage}
            layout="intrinsic"
            className="header-image"
            alt="Earn Management"
          />
        </a>
        <div className="navigationDiv">
          <div className="nav-links">
            <a href="/blog" className="nav-links-anchor">
              Blog
            </a>
          </div>
          <div className="nav-links">
            <a href="/docs/introduction/overview" className="nav-links-anchor">
              Docs
            </a>
          </div>
          <div className="nav-links">
            <a
              href="https://roadmap.earnalliance.com"
              className="nav-links-anchor"
            >
              Roadmap
            </a>
          </div>
          <div className="nav-links">
            <a href="/contact" className="nav-links-anchor">
              Contact
            </a>
          </div>
        </div>
        <div className="header-button-div">
          <Button type="submit" onClick={loginFunction}>
            <div className="login-button">Log In</div>
          </Button>
          <Button type="submit" onClick={signUpFunction}>
            <div className="signup-button">Sign Up</div>
          </Button>
        </div>
      </div>
      <div className="header-container-mobile">
        <a href="/" className="header-image-anchor">
          <img
            src={LogoImage}
            layout="intrinsic"
            className="header-image"
            alt="Earn Management"
          />
        </a>
        <HamBurger className="hamburger" onClick={() => myFunction()} />

        <div className="navigationDiv" id="myLinks">
          <CrossIconHamBurger
            className="hamburger-cross"
            onClick={() => myFunction()}
          />
          <div className="navigation-inner-div">
            <div className="nav-links">
              <a href="/blog" className="nav-links-anchor">
                Blog
              </a>
            </div>
            <div className="nav-links">
              <a
                href="https://roadmap.earnalliance.com"
                className="nav-links-anchor"
              >
                Roadmap
              </a>
            </div>
            <div className="nav-links">
              <a href="/contact" className="nav-links-anchor">
                Contact
              </a>
            </div>

            <div className="header-button-div-mobile">
              <Button type="submit">
                <div className="login-button-mobile" onClick={loginFunction}>Log In</div>
              </Button>
            </div>
            <div>
              <Button type="submit" onClick={signUpFunction}>
                <div className="signup-button-mobile">Sign Up</div>
              </Button>
            </div>
            <div className="contact-div-mobile">
              <div className="contact-discord">
                <a href="https://discord.gg/GD65eQuVGz" target="_blank">
                  <Discord className="icon" />
                </a>
              </div>
              <div className="twitter-div">
                <a href="https://twitter.com/earnalliance" target="_blank">
                  <Twitter className="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
