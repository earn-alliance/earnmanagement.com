"use strict";
exports.id = 19;
exports.ids = [19];
exports.modules = {

/***/ 19:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./styles/pages/Home/index.tsx

const Container = (external_styled_components_default()).div`
  display: block;
  min-height: 100vh;
  position: relative;
  background: #0c1e28;
`;
const NavSection = (external_styled_components_default()).div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 50px;
  background: transparent;
  backdrop-filter: blur(34px);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 2;
  hr {
    position: absolute;
    bottom: 0px;
    border: none;
    height: 1px;
    min-width: 100%;
    margin: 0;
    background: linear-gradient(
      90deg,
      transparent,
      #eed5a538,
      #eed5a5,
      #eed5a5,
      #eed5a5,
      #eed5a538,
      transparent
    );
  }
`;
const LogoSection = (external_styled_components_default()).div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SocialSection = (external_styled_components_default()).div`
  display: flex;
  gap: 30px;
  align-items: center;
  .social_icon {
    :hover {
      cursor: pointer;
      filter: drop-shadow(0px 4px 24px #eed5a5);
    }
  }
`;
const WhitepaperTitle = (external_styled_components_default()).div`
  font-weight: 300;
  font-size: 18px;
  color: #ffffff;
`;
const AboutContainer = (external_styled_components_default()).div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('/images/AboutImage.png');
  background-repeat: no-repeat;
  background-size: 100% 100vh;
  background-blend-mode: darken;
  gap: 25px;
  .discordBtn {
    margin-top: 20px;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 300px;
    background: rgba(238, 213, 165, 0.2);
    border: 2px solid #eed5a5;
    font-family: 'Rubik';
    font-weight: 500;
    text-transform: capitalize;
    font-size: 18px;
    color: #ffffff;
    padding: 12px;
    :hover {
      background: #eed5a5;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
  }
  .discord_icon {
    margin-right: 10px;
    margin-bottom: 3px;

    fill: red;
  }
  hr {
    position: absolute;
    bottom: 0px;
    border: none;
    height: 1px;
    min-width: 100%;
    margin: 0;
    background: linear-gradient(
      90deg,
      transparent,
      #eed5a538,
      #eed5a5,
      #eed5a5,
      #eed5a5,
      #eed5a538,
      transparent
    );
  }
`;
const DiscoverTitle = (external_styled_components_default()).div`
  font-weight: 700;
  font-size: 40px;
  color: #ffffff;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  :last-word {
    color: #eed5a5;
  }
  .arrow {
    transform: rotate(180deg);
  }
  .universe {
    color: #eed5a5;
  }
`;
const AboutDescription = (external_styled_components_default()).div`
  /* font-family: 'Rubik'; */

  font-weight: 200;
  font-size: 16px;
  letter-spacing: 1px;
  line-height: 27px;
  color: #ffffff;
  max-width: 700px;
  text-align: center;
`;
const MissionContainer = (external_styled_components_default()).div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  justify-content: space-between;
  padding: 70px 15%;
`;
const ContentSection = (external_styled_components_default()).div`
  background-image: url('/images/BackgroundContainer.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-blend-mode: darken;
`;
const MissionTitle = (external_styled_components_default()).div`
  font-weight: 700;
  font-size: 40px;
  color: #ffffff;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  .arrow {
    transform: rotate(180deg);
  }
`;
const MissionDescription = (external_styled_components_default()).div`
  /* font-family: 'Rubik'; */

  font-weight: 100;
  font-size: 16px;
  letter-spacing: 1px;
  line-height: 27px;
  color: #ffffff;
  max-width: 700px;
  text-align: left;
`;
const ProjectContainer = (external_styled_components_default()).div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 100px 0;
  padding-left: 15%;
`;
const ProjectRightContainer = (external_styled_components_default()).div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  padding: 100px 0;
  padding-right: 15%;
`;
const ProjectInfo = (external_styled_components_default()).div`
  display: grid;
  gap: 15px;

  .button {
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 300px;
    background: rgba(238, 213, 165, 0.2);
    border: 2px solid #eed5a5;
    font-family: 'Rubik';

    font-weight: 500;
    text-transform: capitalize;
    font-size: 18px;
    color: #ffffff;
    padding: 12px;
    :hover {
      background: #eed5a5;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
  }
`;
const ProjectLabel = (external_styled_components_default()).div`
  font-family: 'Rubik';

  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  letter-spacing: 0.5em;
  color: #eed5a5;
  text-transform: uppercase;
`;
const ProjectTitle = (external_styled_components_default()).div`
  font-weight: 700;
  font-size: 36px;
  line-height: 120%;
  color: #ffffff;
  letter-spacing: 1px;
  .arrow {
    margin-left: 15px;
  }
`;
const ProjectDescription = (external_styled_components_default()).div`
  margin-top: 10px;

  font-weight: 150;
  font-size: 18px;
  line-height: 150%;
  color: #ffffff;
  max-width: 450px;
  letter-spacing: 1px;
`;
const ProjectGrowth = (external_styled_components_default()).div`
  display: flex;
  align-items: center;
  gap: 50px;
  justify-content: flex-start;
  margin-top: 20px;
  flex-wrap: wrap;
`;
const ProjectEvents = (external_styled_components_default()).div`
  display: grid;
  gap: 8px;
  border-right: 1px solid rgba(238, 213, 165, 1);
  padding-right: 50px;
  @media screen and (max-width: 1024px) {
    border-right: none;
  }
  :last-child {
    border: none;
  }
`;
const Home_Number = (external_styled_components_default()).div`
  font-weight: 700;
  font-size: 40px;
  line-height: 120%;
  color: #ffffff;
`;
const Events = (external_styled_components_default()).div`
  font-weight: 200;
  font-size: 18px;
  color: #ffffff;
`;
const InvestorSection = (external_styled_components_default()).div`
  display: block;
  padding-bottom: 10%;
`;
const InvestorContainer = (external_styled_components_default()).div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
  padding: 50px;
  margin: 0 auto;
  gap: 20px;
`;
const InvestorCard = (external_styled_components_default()).div`
  height: 130px;
  width: 100%;
  max-width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgba(238, 213, 165, 0.2);
  border: 2px solid #eed5a5;
  border-radius: 16px;
`;
const FooterSection = (external_styled_components_default()).div`
  padding: 80px 15%;
  background: #000;
  @media screen and (max-width: 1024px) {
    padding: 80px 10%;
  }
`;
const Navigation = (external_styled_components_default()).div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  gap: 10px;
`;
const Copyrights = (external_styled_components_default()).div`
  font-weight: 200;
  font-size: 18px;
  color: #ffffff;
  opacity: 0.3;
  letter-spacing: 1px;
`;
const NavContainer = (external_styled_components_default()).div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
const Navlink = (external_styled_components_default()).div`
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 120%;
  color: #ffffff;
  cursor: pointer;
`;
const RoadmapInvestors = (external_styled_components_default()).div`
  background-image: url('/images/RoadmapBackgroundImage.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-blend-mode: darken;
  position: relative;
  .border {
    position: absolute;
    bottom: 0px;
    border: none;
    height: 1px;
    min-width: 100%;
    margin: 0;
    background: linear-gradient(
      90deg,
      transparent,
      #eed5a538,
      #eed5a5,
      #eed5a5,
      #eed5a5,
      #eed5a538,
      transparent
    );
  }
`;
///////////////////////////////////////////////////////////////////////////////////////////
const MainWrapper = (external_styled_components_default()).div`
  display: flex;
  flex-direction: column;
  height: 600px;
`;
const Wrapper = (external_styled_components_default()).div`
  position: absolute;
  display: flex;
  min-height: 500px;
  width: 100%;
  background: transparent;
  overflow-x: scroll;
  /* overflow-x: auto; */
  overflow-y: hidden;
  padding: 0 10%;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const MainContainer = (external_styled_components_default()).div`
  display: flex;
  min-width: 350px;
  width: 100%;
`;
const Line = (external_styled_components_default()).hr`
  position: relative;
  border: 1px solid #ffffff;
  transform: rotate(90deg) skewX(12deg);
  max-height: 321px;
  left: 150px;
  top: 92px;
`;
const Circle = (external_styled_components_default()).circle`
  position: relative;
  border-radius: 50%;
  background: #fffcf7;
  box-shadow: 0px 0px 12px #fffcf6;
  width: 100%;
  max-width: 30px;
  height: 30px;
  left: 302px;
  top: 206px;
  z-index: 1;
`;
const Line1 = (external_styled_components_default()).hr`
  position: relative;
  border: 1px solid #ffffff;
  transform: rotate(90deg) skewX(-12deg);
  max-height: 321px;
  left: 150px;
  top: 92px;
`;
const Circle1 = (external_styled_components_default()).circle`
  position: relative;
  border-radius: 50%;
  background: #fffcf7;
  box-shadow: 0px 0px 12px #fffcf6;
  width: 30px;
  height: 30px;
  left: 303px;
  top: 282px;
  z-index: 1;
`;
const UpsideArrow = (external_styled_components_default()).line`
  position: relative;
  border: 1px solid #fff;
  height: 50px;
  left: 285px;
  top: 156px;
`;
const DownArrow = (external_styled_components_default()).line`
  position: relative;
  border: 1px solid #fff;
  height: 50px;
  left: 287px;
  top: 308px;
`;
const ContentWrapper = (external_styled_components_default()).div`
  display: flex;
  flex-direction: column;
  max-width: 301px;
  width: 100%;
  position: relative;
  left: 176px;
  top: 38px;
`;
const Heading = (external_styled_components_default()).h2`
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
`;
const Data = (external_styled_components_default()).div`
  font-weight: 300;
  font-size: 13px;
  color: #fff;
  letter-spacing: 1px;
`;
const ContentContainer = (external_styled_components_default()).div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  max-width: 301px;
  width: 100%;
  position: relative;
  left: 210px;
  top: -26px;
`;
const QuarterTitles = (external_styled_components_default()).div`
  display: flex;
  justify-content: space-between;
  padding: 30px 15%;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 120%;
  color: #e2d1b8;
`;

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/svg/TwitterIcon.tsx


const Icon = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: 28,
        height: 28,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                clipPath: "url(#a)",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M26.942 5.105c-.433.192-.879.354-1.334.485.539-.609.95-1.325 1.2-2.11a.445.445 0 0 0-.65-.518c-.966.573-2.009.985-3.101 1.226A5.947 5.947 0 0 0 18.914 2.5a5.924 5.924 0 0 0-5.869 6.682A15.15 15.15 0 0 1 2.647 3.666a.444.444 0 0 0-.73.057 5.915 5.915 0 0 0-.8 2.975c0 1.426.508 2.779 1.408 3.836a5.011 5.011 0 0 1-.792-.354.444.444 0 0 0-.66.379l-.001.079a5.939 5.939 0 0 0 2.896 5.089c-.15-.015-.3-.037-.45-.065a.444.444 0 0 0-.507.572A5.916 5.916 0 0 0 7.346 20.2a10.469 10.469 0 0 1-5.596 1.598c-.419 0-.84-.025-1.253-.074a.445.445 0 0 0-.292.816 15.959 15.959 0 0 0 8.63 2.53c6.024 0 9.793-2.842 11.894-5.225 2.62-2.972 4.122-6.906 4.122-10.793 0-.162-.002-.326-.007-.49a11.503 11.503 0 0 0 2.647-2.804.445.445 0 0 0-.55-.653Z",
                    fill: "#EED5A5"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                    id: "a",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: "#fff",
                        d: "M0 0h27.566v27.566H0z"
                    })
                })
            })
        ]
    });
/* harmony default export */ const TwitterIcon = (Icon);

;// CONCATENATED MODULE: ./public/svg/FacebookIcon.tsx


const FacebookIcon_Icon = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: 25,
        height: 25,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M21.258 0H3.648A3.653 3.653 0 0 0 0 3.648v17.61a3.653 3.653 0 0 0 3.648 3.649h7.346v-8.805H8.075v-4.378h2.919V8.756a4.383 4.383 0 0 1 4.378-4.378H19.8v4.378h-4.427v2.968H19.8l-.73 4.378h-3.697v8.805h5.886a3.653 3.653 0 0 0 3.649-3.649V3.648A3.653 3.653 0 0 0 21.258 0Z",
            fill: "#EED5A5"
        })
    });
/* harmony default export */ const FacebookIcon = (FacebookIcon_Icon);

;// CONCATENATED MODULE: ./public/svg/DiscordIcon.tsx


const DiscordIcon_Icon = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: 28,
        height: 28,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                clipPath: "url(#a)",
                fill: "#EED5A5",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M4.112 24.346H20.49l-.782-2.533 1.87 1.606 1.715 1.537 3.125 2.61V2.843C26.34 1.306 25.016 0 23.376 0L4.118.003c-1.64 0-2.97 1.309-2.97 2.846v18.653c0 1.62 1.328 2.844 2.964 2.844ZM16.227 6.527l-.038.014.014-.014h.024ZM7.462 7.985c2.106-1.532 4.057-1.459 4.057-1.459l.158.155C9.1 7.296 7.932 8.447 7.932 8.447s.312-.153.858-.386c3.47-1.365 7.26-1.266 10.767.462 0 0-1.17-1.077-3.588-1.766l.213-.21c.335.001 2.104.063 3.996 1.447 0 0 2.118 3.618 2.118 8.063-.07-.085-1.314 1.914-4.515 1.983 0 0-.542-.613-.928-1.149 1.872-.537 2.573-1.612 2.573-1.612-.614.387-1.175.616-1.63.846-.7.308-1.4.46-2.1.615-3.312.537-5.172-.362-6.929-1.075l-.6-.306s.699 1.075 2.496 1.613c-.472.538-.94 1.15-.94 1.15-3.2-.075-4.366-2.074-4.366-2.074 0-4.452 2.105-8.063 2.105-8.063Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M16.435 14.666c.817 0 1.482-.689 1.482-1.539 0-.844-.662-1.533-1.482-1.533v.003c-.813 0-1.48.687-1.482 1.537 0 .843.665 1.532 1.482 1.532ZM11.13 14.666c.817 0 1.482-.689 1.482-1.539 0-.844-.66-1.533-1.477-1.533l-.005.003c-.817 0-1.482.687-1.482 1.537 0 .843.665 1.532 1.482 1.532Z"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                    id: "a",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: "#fff",
                        d: "M0 0h27.566v27.566H0z",
                        className: "button_icon"
                    })
                })
            })
        ]
    });
/* harmony default export */ const DiscordIcon = (DiscordIcon_Icon);

;// CONCATENATED MODULE: ./views/Navbar/index.tsx







const Navbar = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavSection, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(LogoSection, {
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    priority: true,
                    src: "/images/Logo.png",
                    layout: "intrinsic",
                    width: "122",
                    height: "50",
                    alt: "Earn"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SocialSection, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(WhitepaperTitle, {
                        children: "Whitepaper"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(TwitterIcon, {
                        className: "social_icon"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(FacebookIcon, {
                        className: "social_icon"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(DiscordIcon, {
                        className: "social_icon"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {})
        ]
    });
/* harmony default export */ const views_Navbar = (Navbar);

;// CONCATENATED MODULE: ./public/svg/DiscordButtonIcon.tsx


const DiscordButtonIcon_Icon = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                clipPath: "url(#a)",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M20.317 4.493c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.607 1.23a18.566 18.566 0 0 0-5.488 0 12.358 12.358 0 0 0-.617-1.23.077.077 0 0 0-.079-.038c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.094-.32 13.556.1 17.962a.08.08 0 0 0 .031.055 20.031 20.031 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.463-.619.873-1.276 1.226-1.963a.073.073 0 0 0-.014-.087.075.075 0 0 0-.027-.017 13.19 13.19 0 0 1-1.872-.878.074.074 0 0 1-.037-.06.075.075 0 0 1 .03-.065c.125-.093.251-.19.371-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .08.009c.12.098.244.195.371.288a.076.076 0 0 1 .031.064.076.076 0 0 1-.037.06c-.598.345-1.22.636-1.872.878a.074.074 0 0 0-.045.043.074.074 0 0 0 .004.062c.36.687.771 1.34 1.224 1.962a.076.076 0 0 0 .084.028 19.964 19.964 0 0 0 6.003-2.981.077.077 0 0 0 .032-.054c.5-5.094-.838-9.52-3.55-13.442a.06.06 0 0 0-.03-.028ZM8.02 15.279c-1.182 0-2.157-1.07-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.177 1.077 2.158 2.38 0 1.312-.957 2.38-2.158 2.38Zm7.976 0c-1.184 0-2.158-1.07-2.158-2.38 0-1.312.956-2.38 2.158-2.38 1.21 0 2.176 1.077 2.156 2.38 0 1.312-.946 2.38-2.157 2.38Z",
                    fill: "#fff"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                    id: "a",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: "#fff",
                        d: "M0 0h24v24H0z",
                        className: "button_icon"
                    })
                })
            })
        ]
    });
/* harmony default export */ const DiscordButtonIcon = (DiscordButtonIcon_Icon);

;// CONCATENATED MODULE: ./public/svg/DesignSymbol.tsx


const DesignSymbol_Icon = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: 20,
        height: 26,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "m1 1 12 12L1 25",
                stroke: "#EED5A5",
                strokeWidth: 2
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                stroke: "#EED5A5",
                d: "m10.5 5.207 8.294 8.294-8.294 8.293-8.294-8.293z"
            })
        ]
    });
/* harmony default export */ const DesignSymbol = (DesignSymbol_Icon);

;// CONCATENATED MODULE: ./styles/components/button/index.tsx

const ButtonWrapper = (external_styled_components_default()).div`
  position: relative;
  margin-top: 20px;
`;
const Btn = (external_styled_components_default()).button`
  display: flex;
  background: url('/images/ButtonImage.png');
  background-size: 100%;
  background-repeat: no-repeat;
  border: none;
  min-width: 269px;
  height: 53px;
  color: #fff;
  font-family: 'Rubik', sans-serif;
  font-size: 18px;
  align-items: center;
  text-transform: capitalize;
  cursor: pointer;

  justify-content: center;
  clip-path: polygon(100% 0, 100% 100%, 19px 100%, 0% 34px, 0 0);

  :hover {
    background-color: rgba(238, 213, 165, 1);
    color: #000;
    transition: all 0.3s ease-out;
  }
  .button_icon {
    fill: red;
  }

  > svg {
    ${ButtonWrapper}:hover & {
      stroke: #000000;
      fill: red;
    }
  }
`;
const VectorWrap = (external_styled_components_default()).div`
  position: absolute;
  filter: drop-shadow(0 0 7px white);
  top: 41px;
  left: 0px;
`;
const Vector = (external_styled_components_default()).div`
  clip-path: polygon(0 0, 0 100%, 100% 100%);
  box-shadow: 0 0 10px #fff;
  background: #fff;
  width: 13px;
  height: 13px;
`;

;// CONCATENATED MODULE: ./components/button.tsx



const Button = ({ content  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ButtonWrapper, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Btn, {
                    children: content
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(VectorWrap, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Vector, {})
                })
            ]
        })
    });
};
/* harmony default export */ const components_button = (Button);

;// CONCATENATED MODULE: ./views/AboutSection/index.tsx







const AboutSection = ()=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(AboutContainer, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    priority: true,
                    src: "/images/Logo.png",
                    layout: "intrinsic",
                    width: "255",
                    height: "105",
                    alt: "Earn"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DiscoverTitle, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(DesignSymbol, {
                            className: "arrow"
                        }),
                        "DISCOVER OUR ",
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "universe",
                            children: "UNIVERSE"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(DesignSymbol, {})
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(AboutDescription, {
                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare hendrerit pharetra. Integer sodales mi libero, sollicitudin euismod tortor vestibulum ut. In lobortis at justo in efficitur."
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(components_button, {
                    content: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(DiscordButtonIcon, {
                                className: "discord_icon"
                            }),
                            "Join Our Discord"
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("hr", {})
            ]
        })
    });
/* harmony default export */ const views_AboutSection = (AboutSection);

;// CONCATENATED MODULE: ./views/ProjectSection/index.tsx






const ProjectSection = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ProjectContainer, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ProjectInfo, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ProjectLabel, {
                                children: "Project"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ProjectTitle, {
                                children: [
                                    "Earn Management",
                                    /*#__PURE__*/ jsx_runtime_.jsx(DesignSymbol, {
                                        className: "arrow"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ProjectDescription, {
                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare hendrerit pharetra. Integer sodales mi libero, sollicitudin euismod tortor vestibulum ut. In lobortis at justo in efficitur."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ProjectGrowth, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ProjectEvents, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Home_Number, {
                                                children: "10K+"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Events, {
                                                children: "Scholars managed"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ProjectEvents, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Home_Number, {
                                                children: "100K+"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Events, {
                                                children: "Assets Tracked"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ProjectEvents, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Home_Number, {
                                                children: "15M+"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Events, {
                                                children: "SLP transferred"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_button, {
                                content: "Get Started"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        priority: true,
                        src: "/images/ProjectImage.png",
                        layout: "intrinsic",
                        width: "715",
                        height: "415",
                        alt: "Earn"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ProjectRightContainer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        priority: true,
                        src: "/images/ProjectRightImage.png",
                        layout: "intrinsic",
                        width: "715",
                        height: "415",
                        alt: "Earn"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ProjectInfo, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ProjectLabel, {
                                children: "Project"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ProjectTitle, {
                                children: [
                                    "Earn Alliance",
                                    /*#__PURE__*/ jsx_runtime_.jsx(DesignSymbol, {
                                        className: "arrow"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ProjectDescription, {
                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare hendrerit pharetra. Integer sodales mi libero, sollicitudin euismod tortor vestibulum ut. In lobortis at justo in efficitur."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_button, {
                                content: "Get a Preview"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ProjectContainer, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ProjectInfo, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ProjectLabel, {
                                children: "Project"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ProjectTitle, {
                                children: [
                                    "Zom Zom",
                                    /*#__PURE__*/ jsx_runtime_.jsx(DesignSymbol, {
                                        className: "arrow"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ProjectDescription, {
                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare hendrerit pharetra. Integer sodales mi libero, sollicitudin euismod tortor vestibulum ut. In lobortis at justo in efficitur."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_button, {
                                content: "Get Started"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        priority: true,
                        src: "/images/ProjectImage.png",
                        layout: "intrinsic",
                        width: "715",
                        height: "415",
                        alt: "Earn"
                    })
                ]
            })
        ]
    });
/* harmony default export */ const views_ProjectSection = (ProjectSection);

;// CONCATENATED MODULE: ./views/InvestorsSection/index.tsx





const Investors = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(InvestorSection, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DiscoverTitle, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(DesignSymbol, {
                        className: "arrow"
                    }),
                    "Investors & Partners",
                    /*#__PURE__*/ jsx_runtime_.jsx(DesignSymbol, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(InvestorContainer, {
                children: Array.from({
                    length: 11
                }, (_, idx)=>`${++idx}`).map((e)=>/*#__PURE__*/ jsx_runtime_.jsx(InvestorCard, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            priority: true,
                            src: "/images/Tesla.png",
                            layout: "intrinsic",
                            width: "155",
                            height: "25",
                            alt: "Earn"
                        })
                    }, e))
            })
        ]
    });
/* harmony default export */ const InvestorsSection = (Investors);

;// CONCATENATED MODULE: ./views/Roadmap/index.tsx





const Roadmap = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DiscoverTitle, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(DesignSymbol, {
                        className: "arrow"
                    }),
                    "Roadmap",
                    /*#__PURE__*/ jsx_runtime_.jsx(DesignSymbol, {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(QuarterTitles, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: "Q4 2022"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: "Q1 2022"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(MainWrapper, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Wrapper, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MainContainer, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Line, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(Circle, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(UpsideArrow, {}),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContentWrapper, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Heading, {
                                            children: "Lorem Ipsum"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Data, {
                                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Pr at justo in efficitur."
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MainContainer, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Line1, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(Circle1, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(DownArrow, {}),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContentContainer, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Heading, {
                                            children: "Lorem Ipsum"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Data, {
                                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Pr at justo in efficitur."
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MainContainer, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Line, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(Circle, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(UpsideArrow, {}),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContentWrapper, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Heading, {
                                            children: "Lorem Ipsum"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Data, {
                                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Pr at justo in efficitur."
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MainContainer, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Line1, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(Circle1, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(DownArrow, {}),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContentContainer, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Heading, {
                                            children: "Lorem Ipsum"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Data, {
                                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Pr at justo in efficitur."
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MainContainer, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Line, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(Circle, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(UpsideArrow, {}),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContentWrapper, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Heading, {
                                            children: "Lorem Ipsum"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Data, {
                                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Pr at justo in efficitur."
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MainContainer, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Line1, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(Circle1, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(DownArrow, {}),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContentContainer, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Heading, {
                                            children: "Lorem Ipsum"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Data, {
                                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Pr at justo in efficitur."
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MainContainer, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Line, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(Circle, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(UpsideArrow, {}),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContentWrapper, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Heading, {
                                            children: "Lorem Ipsum"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Data, {
                                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Pr at justo in efficitur."
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MainContainer, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Line1, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(Circle1, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(DownArrow, {}),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContentContainer, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Heading, {
                                            children: "Lorem Ipsum"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Data, {
                                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Pr at justo in efficitur."
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
/* harmony default export */ const views_Roadmap = (Roadmap);

;// CONCATENATED MODULE: ./views/OurMission/index.tsx







const Mission = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContentSection, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MissionContainer, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MissionTitle, {
                                children: [
                                    "Our Mission",
                                    /*#__PURE__*/ jsx_runtime_.jsx(DesignSymbol, {})
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(MissionDescription, {
                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare hendrerit pharetra. Integer sodales mi libero, sollicitudin euismod tortor vestibulum ut. In lobortis at justo in efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare hendrerit pharetra. Integer sodales mi libero, sollicitudin euismod tortor vestibulum ut. In lobortis at justo in efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare hendrerit pharetra. Integer sodales mi libero, sollicitudin euismod tortor vestibulum ut. In lobortis at justo in efficitur."
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(views_ProjectSection, {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(RoadmapInvestors, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(views_Roadmap, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(InvestorsSection, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                        className: "border"
                    })
                ]
            })
        ]
    });
/* harmony default export */ const OurMission = (Mission);

;// CONCATENATED MODULE: ./views/Footer/index.tsx







const Footer = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(FooterSection, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LogoSection, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        priority: true,
                        src: "/images/Logo.png",
                        layout: "intrinsic",
                        width: "177",
                        height: "73",
                        alt: "Earn"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SocialSection, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(WhitepaperTitle, {
                                children: "Whitepaper"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TwitterIcon, {
                                className: "social_icon"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(FacebookIcon, {
                                className: "social_icon"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(DiscordIcon, {
                                className: "social_icon"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Navigation, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Copyrights, {
                        children: "All Rights Reserved 2022 Earn Alliance"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavContainer, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Navlink, {
                                children: "Privacy Policy"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Navlink, {
                                children: "Terms of Use"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Navlink, {
                                children: "Cookies policy"
                            })
                        ]
                    })
                ]
            })
        ]
    });
/* harmony default export */ const views_Footer = (Footer);

;// CONCATENATED MODULE: ./pages/home.tsx







const HomePage = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(views_Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(views_AboutSection, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(OurMission, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(views_Footer, {})
        ]
    });
/* harmony default export */ const home = (HomePage);


/***/ })

};
;