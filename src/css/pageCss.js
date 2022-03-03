import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 5px 10px;
  /* background: #edf3f4; */
  /* background: #fcfefe; */
  background-blend-mode: overlay, normal;
  overflow: hidden;
  // grid-template-rows: auto 1fr;
  // display: grid;
  align-items: center;
  min-height: 100vh;
  .icon {
    cursor: pointer;
  }
  /* height: 100%; */
  /* @media screen and (max-height: 600px) {
    height: 100vh;
  } */
`;
export const HeadSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 65px;
  background: rgba(255, 255, 255, 0);
  backdrop-filter: blur(40px);
  max-width: 1920px;
  margin: 0 auto;
  width: 100%;
  @media screen and (max-width: 1000px) {
    padding: 30px;
  }
  @media screen and (max-width: 679px) {
    padding: 30px 15px;
    img {
      max-width: 50px;
    }
  }
`;
export const Navigations = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  @media (max-width:679px) {
    gap: 20px;
  }
`;
export const NavLink = styled.div`
  font-family: 'spartan_mbsemibold';
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  cursor: pointer;
`;

export const Contact = styled.div`
  border: 1px solid rgba(84, 84, 84, 0.17);
  box-sizing: border-box;
  border-radius: 60px;
  padding: 0px 5px;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  @media (max-width:679px) {
    height: auto;
  }
`;
export const ContactTwitter = styled.div`
  width: 43px;
  height: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  :hover {
    background: #0cb7f4;
    padding: 14px 12px;
    .icon {
      fill: #ffffff;
    }
  }
  @media (max-width:679px) {
    width: 30px;
  height: 30px;
  }
`;
export const ContactDiscord = styled.div`
  width: 43px;
  height: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  :hover {
    background: #5865f2;
    padding: 14px 12px;
    .icon {
      fill: #ffffff;
    }
  }
  @media (max-width:679px) {
    width: 30px;
  height: 30px;
  }
`;
export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  padding: 0 50px;
  @media screen and (max-width: 880px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 679px) {
  padding: 20px;
  }

  /* @media screen and (max-width: 1200px) {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: auto;
  } */
`;
export const Wrapper = styled.div`
  display: grid;
  align-content: space-between;
  min-height: 500px;
  padding-left: 82px;
  @media (max-width:880px) {
    min-height: auto;
    padding-left: 0;
  }
`;
export const FormWrapper = styled.div`
  width: 100%;
  max-width: 614px;
  align-self: center;
  @media screen and (max-width: 880px) {
    max-width: 100%;
    text-align: center;
  }
`;
export const Footnote = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  color: #000000;
  cursor: pointer;
  @media screen and (max-width: 880px) {
    text-align: center;
  }
`;

export const Title = styled.div`
  font-family: 'outfit500';
  font-size: clamp(1rem, 6vw, 80px);
  line-height: clamp(1rem, 6vw, 88px);
  color: #262a50;
`;
export const Text = styled.div`
  font-family: 'outfit400';
  font-size: clamp(1rem,1.3vw,20px);
  line-height: clamp(1rem,2.3vw,30px);
  letter-spacing: 0.2px;
  color: #9fa7b1;
  margin-top: 24px;
`;

export const ImageWrapper = styled.div`
  display: grid;
  /* height: 650px; */
  width: 100%;
  max-width: 834px;
  background: radial-gradient(
    41.76% 41.76% at 50% 50%,
    rgba(23, 129, 241, 0.24) 0%,
    rgba(50, 154, 252, 0) 100%
  );
`;
export const ImageSection = styled.div`
  position: absolute;
  /* width: 660px; */
  background: radial-gradient(
    41.76% 41.76% at 50% 50%,
    rgba(0, 209, 255, 0.24) 0%,
    rgba(0, 163, 255, 0) 100%
  );
  /* margin: 0 auto; */
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 1400px) {
    width: 580px;
  }
`;

export const ImageTextOne = styled.div`
  background: rgba(255, 255, 255, 0.06);
  z-index: 2;
  backdrop-filter: blur(80px);
  border-radius: 90px;
  font-family: Outfit;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  color: #000000;
  mix-blend-mode: luminosity;
  padding: 20px 27px;
  max-width: 245px;
  justify-self: flex-end;
  align-self: flex-end;
`;
export const ImageTextTwo = styled.div`
  background: rgba(255, 255, 255, 0.06);
  z-index: 2;
  backdrop-filter: blur(80px);
  border-radius: 90px;
  font-family: Outfit;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  color: #000000;
  padding: 20px 10px 20px 25px;
  max-width: 293px;
  justify-self: flex-start;
  align-self: center;
`;
export const ImageTextThree = styled.div`
  background: rgba(255, 255, 255, 0.06);
  z-index: 2;
  backdrop-filter: blur(80px);
  border-radius: 90px;
  font-family: Outfit;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  color: #000000;
  padding: 20px 27px;
  max-width: 313px;
  justify-self: flex-end;
  align-self: flex-start;
`;
export const ImageTextFour = styled.div`
  background: rgba(255, 255, 255, 0.06);
  z-index: 2;
  backdrop-filter: blur(80px);
  border-radius: 90px;
  font-family: Outfit;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  color: #000000;
  padding: 20px 0px 20px 35px;
  max-width: 356px;
  justify-self: flex-start;
  align-self: flex-start;
  transform: translateY(-63px);
`;
export const SubmitButton = styled.div`
  padding: 0px 20px;
  padding-top: 20px;
  padding-bottom: 12px;
  background: linear-gradient(180deg, #107bee 0%, #359dfd 100%);
  border-radius: 90px;
`;
export const InputWrapper = styled.div`
  margin-top: 38px;
  width: 100%;
  max-width: 475px;
  background: rgba(255, 255, 255, 0.21);
  border: 1px solid rgba(57, 57, 57, 0.18);
  box-sizing: border-box;
  border-radius: 89px;
  padding: 0px 5px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  .email_address {
    width: 100%;
    max-width: 307px;
    height: 48px;
    background: none;
    border: none;
    outline: none;
    padding: 0 0 0 27px;
    font-family: 'outfit400';
    font-size: 14px;
    line-height: 106px;
    border-right: 1px solid #d4d4d4;
    color: #3939399e;
    ::placeholder {
      color: #3939399e;
    }
    :focus {
      outline: none;
      border: none;
      border-right: 2px solid #d4d4d4;
    }
  }
  .home_select {
    font-family: 'outfit400';
    font-size: 14px;
    height: 70px;
    display: flex;
    .css-14el2xx-placeholder {
      color: #3e3e3e;
    }
    .css-1s2u09g-control {
      max-height: 70px;
      min-width: 125px;
      background: none;
      border: none;
      font-family: 'outfit400';
      font-size: 14px;
      color: #3e3e3e;
      padding-left: 2px;
    }
    .css-1pahdxg-control {
      min-width: 125px;
      max-height: 70px;
      background: none;
      border: none;
      box-shadow: none;
      color: #3e3e3e;
    }
    .css-qc6sy-singleValue {
      margin-left: 0px;
      color: #3e3e3e;
    }

    .css-1pndypt-Input {
      color: #3e3e3e;
    }
    .css-1okebmr-indicatorSeparator {
      background: none;
    }
    .css-tlfecz-indicatorContainer {
      color: #3e3e3e;
    }
  }
  @media screen and (max-width: 880px) {
    margin: 38px auto 0;
  }
`;
export const Footer = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.21);
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 40px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: auto;
    grid-gap: 60px;
  }
`;
export const Fingertipe = styled.div`
  display: grid;
  grid-gap: 19px;
`;
export const Resources = styled.div`
  display: grid;
  grid-gap: 19px;
`;
export const About = styled.div`
  display: grid;
  grid-gap: 19px;
`;
export const Links = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 95px;
`;

export const LinkTitle = styled.div`
  font-family: Graphik;

  font-weight: 500;
  font-size: 20px;
  color: #000000;
  margin-bottom: 20px;
`;

export const LinkText = styled.div`
  font-family: Graphik;

  font-weight: 500;
  font-size: 16px;
  color: #000000;
  cursor: pointer;
`;
export const ContactUs = styled.div`
  display: grid;
  grid-gap: 27px;
  @media screen and (max-width: 1000px) {
    justify-content: center;
  }
`;
export const JoinDiscord = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  grid-gap: 15px;
  cursor: pointer;
  font-family: Graphik;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
`;
export const PhoneNumber = styled.div`
  padding-left: 4px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  grid-gap: 20px;
  font-family: Graphik;

  font-weight: 500;
  font-size: 16px;
  color: #000000;
`;
export const Channels = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 30px;
  padding-top: 20px;
  @media screen and (max-width: 1000px) {
    justify-content: center;
  }
`;
export const DiscordLink = styled.div`
  position: absolute;
  bottom: 0;
  justify-self: right;
  z-index: 2;
  cursor: pointer;
  display: grid;
  align-content: center;
  justify-content: center;
  grid-gap: 7px;
  width: 122px;
  height: 122px;
  font-family: Outfit;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.1px;
  color: #ffffff;
  background: #7664e3;
  border-radius: 50%;
  margin: 10px;
  margin-bottom: 0px;

  .discord_icon {
    justify-self: center;
  }
`;
export const ContactWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  display: grid;
  grid-gap: 33px;
  justify-self: left;
  padding: 40px;
  border-left: 3px solid rgba(255, 255, 255, 0.12);

  border-top-left-radius: 30px;
`;
export const TitleSection = styled.div``;

export const ContactHeading = styled.div`
  font-family: Outfit;
  font-weight: 500;
  font-size: 80px;
  letter-spacing: 0.2px;
  color: #000000;
`;
export const TextWrapper = styled.div`
  font-family: Outfit;
  font-size: 18px;
  letter-spacing: 0.2px;
  color: #000000;
  margin-bottom: 80px;
`;
export const Information = styled.div`
  display: flex;
  grid-gap: 25px;
`;
export const InfoSection = styled.div`
  display: grid;
  grid-gap: 55px;
`;
export const Infotext = styled.div`
  font-family: Outfit;
  font-weight: 500;
  font-size: 18px;
  color: #000000;
`;
export const InfoNumber = styled.div`
  font-family: Outfit;
  font-weight: 500;
  font-size: 18px;
  color: #000000;
  display: flex;
  align-items: center;
  grid-gap: 3px;
`;
export const Code = styled.div`
  font-family: Outfit;
  font-weight: 500;
  font-size: 18px;
  color: #6c6c6c;
  display: flex;
  align-items: center;
`;
export const InputSection = styled.div`
  display: grid;
  grid-gap: 66px;
  width: 100%;
  .info_input {
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.21);
    font-family: Outfit;
    font-size: 16px;
    color: #000000;
    mix-blend-mode: luminosity;
    padding-bottom: 5px;
    ::placeholder {
      font-family: Outfit;
      font-size: 16px;
      color: rgba(255, 255, 255, 0.39);
      mix-blend-mode: luminosity;
    }
    :focus {
      border: none;
      outline: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.21);
    }
  }
`;
export const RequestButton = styled.div`
  justify-self: end;
  background: linear-gradient(180deg, #107bee 0%, #359dfd 100%);
  width: 156px;
  height: 158px;
  display: grid;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-family: Outfit;
  font-weight: bold;
  font-size: 14px;
  color: #000000;
  cursor: pointer;
  :hover {
    transform: scale(1.02);
  }
`;
export const RoadMapContainer = styled.div`
  width: 100%;
`;
export const QuarterOne = styled.div`
  display: grid;
  grid-template-columns: 15% 70% 15%;
`;
export const QOneRoadMapBox = styled.div`
  border-radius: 30px;
`;
export const QOneRoadMapContent = styled.div`
  border-radius: 30px;
  display: grid;
  grid-template-columns: 50% 50%;
`;

export const RoadmapTextContainer = styled.div`
  display: grid;
  padding: 82px 0px 0px 50px;
`;
export const RoadMapTitle = styled.div`
  font-family: Outfit;
  font-style: normal;
  font-weight: 500;
  font-size: 80px;
  line-height: 88px;
  color: #000000;
`;
export const RoadMapText = styled.div`
  font-family: Outfit;
  font-style: normal;
  font-weight: 100;
  font-size: 18px;
  line-height: 30px;
  color: #000000;
`;
export const RoadmapQuarterOneContainer = styled.div`
  display: grid;
  justify-content: flex-start;
  padding-left: 120px;
  padding-bottom: 80px;
  position: relative;
`;
export const RoadMapYear = styled.div`
  font-family: Outfit;
  font-weight: 100;
  font-size: 71px;
  line-height: 89px;
  color: #000000;
`;
export const RoadQuarter = styled.div`
  font-family: Outfit;
  font-style: normal;
  font-weight: 500;
  font-size: 33px;
  color: #15c4c6;
`;
export const RoadQuarterOneText = styled.div`
  font-family: Outfit;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  color: rgba(255, 255, 255, 0.39);
  mix-blend-mode: luminosity;
  max-width: 284px;
`;
export const RoadmapInfo = styled.div`
  display: grid;
  grid-gap: 115px;
`;
export const RoadmapImageWrapper = styled.div`
  background: radial-gradient(
    41.76% 41.76% at 50% 50%,
    rgba(0, 56, 255, 0.24) 0%,
    rgba(0, 133, 255, 0) 100%
  );
  justify-self: center;
  align-self: center;
`;
export const QuarterTwo = styled.div`
  display: grid;
  grid-template-columns: 15% 70% 15%;
`;
export const QRoadTwoContent = styled.div`
  display: grid;
  align-items: center;
  justify-items: flex-end;
  padding: 30px 136px 30px 0px;
  position: relative;
`;
export const RoadQuarterTwoText = styled.div`
  font-family: Outfit;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  text-align: right;
  color: rgba(255, 255, 255, 0.39);
  mix-blend-mode: luminosity;
  max-width: 368px;
`;
export const QTwoRoadMapBox = styled.div`
  border: none;
`;
export const QuarterRoadLast = styled.div`
  border: none;
`;
export const QuarterThree = styled.div`
  display: grid;
  grid-template-columns: 15% 70% 15%;
`;
export const QuarterFour = styled.div`
  display: grid;
  grid-template-columns: 15% 70% 15%;
`;
export const QuarterFive = styled.div`
  display: grid;
  grid-template-columns: 15% 70% 15%;
`;
export const QuarterSix = styled.div`
  display: grid;
  grid-template-columns: 15% 70% 15%;
`;
export const QuarterSeven = styled.div`
  display: grid;
  grid-template-columns: 15% 75% 10%;
`;
export const QRoadThreeContent = styled.div`
  display: grid;
  align-items: center;
  justify-items: flex-start;
  padding: 30px 0px 30px 136px;

  position: relative;
`;
export const QRoadFourContent = styled.div`
  display: grid;
  align-items: center;
  justify-items: flex-end;
  padding: 30px 136px 30px 0px;
  position: relative;
`;
export const QRoadFiveContent = styled.div`
  display: grid;
  align-items: center;
  justify-items: flex-start;
  padding: 30px 0px 30px 136px;

  position: relative;
`;
export const QRoadSixContent = styled.div`
  display: grid;
  align-items: center;
  justify-items: flex-end;
  padding: 30px 136px 30px 0px;
  position: relative;
`;
export const WhiteWrapper = styled.div`
  width: 100%;
  max-width: 214px;
  height: 179px;
  background: #000000;
  box-shadow: 12px 32px 80px -20px rgba(0, 0, 0, 0.12);
  border-radius: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: absolute;
  left: -115px;
  top: 15px;
  @media screen and (max-width: 1000px) {
    max-width: 170px;
    height: 150px;
    left: -85px;
  }
`;
export const BlueWrapper = styled.div`
  width: 102px;
  height: 102px;
  background: linear-gradient(180deg, #15c4c6 0%, #0c79f4 50%);
  border: 6px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 22px 44px rgba(31, 31, 31, 0.4);
  border-radius: 50px;
  @media screen and (max-width: 1000px) {
    width: 92px;
    height: 92px;
  }
`;
export const BlackBoxWrapper = styled.div`
  width: 100%;
  max-width: 214px;
  position: absolute;
  &.left {
    left: -110px;
  }
  &.right {
    right: -110px;
  }
  @media screen and (max-width: 1000px) {
    max-width: 182px;
    &.left {
      left: -90px;
    }
    &.right {
      right: -90px;
    }
  }
`;
export const BackWrapper = styled.div`
  height: 133px;
  background: rgba(29, 51, 64, 0.45);
  backdrop-filter: blur(80px);
  border-radius: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;
export const GreyWrapper = styled.div`
  width: 102px;
  height: 102px;
  background: linear-gradient(180deg, #778282 0%, #2f3842 100%);
  border: 6px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 22px 44px rgba(31, 31, 31, 0.4);
  border-radius: 50px;
`;
export const Copyright = styled.div`
  font-family: Outfit;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #000000;
  padding-bottom: 15px;
  margin: 0 auto;
  z-index: 2;
`;