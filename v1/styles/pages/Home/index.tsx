import styled from 'styled-components';
export const Container = styled.div`
  display: block;
  min-height: 100vh;
  position: relative;
  background: #0c1e28;
`;

export const NavSection = styled.div`
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
export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const SocialSection = styled.div`
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
export const WhitepaperTitle = styled.div`
  font-weight: 300;
  font-size: 18px;
  color: #ffffff;
`;
export const AboutContainer = styled.div`
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
export const DiscoverTitle = styled.div`
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
export const AboutDescription = styled.div`
  /* font-family: 'Rubik'; */

  font-weight: 200;
  font-size: 16px;
  letter-spacing: 1px;
  line-height: 27px;
  color: #ffffff;
  max-width: 700px;
  text-align: center;
`;
export const MissionContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  justify-content: space-between;
  padding: 70px 15%;
`;
export const ContentSection = styled.div`
  background-image: url('/images/BackgroundContainer.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-blend-mode: darken;
`;
export const MissionTitle = styled.div`
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
export const MissionDescription = styled.div`
  /* font-family: 'Rubik'; */

  font-weight: 100;
  font-size: 16px;
  letter-spacing: 1px;
  line-height: 27px;
  color: #ffffff;
  max-width: 700px;
  text-align: left;
`;
export const ProjectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 100px 0;
  padding-left: 15%;
`;
export const ProjectRightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  padding: 100px 0;
  padding-right: 15%;
`;
export const ProjectInfo = styled.div`
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
export const ProjectLabel = styled.div`
  font-family: 'Rubik';

  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  letter-spacing: 0.5em;
  color: #eed5a5;
  text-transform: uppercase;
`;
export const ProjectTitle = styled.div`
  font-weight: 700;
  font-size: 36px;
  line-height: 120%;
  color: #ffffff;
  letter-spacing: 1px;
  .arrow {
    margin-left: 15px;
  }
`;
export const ProjectDescription = styled.div`
  margin-top: 10px;

  font-weight: 150;
  font-size: 18px;
  line-height: 150%;
  color: #ffffff;
  max-width: 450px;
  letter-spacing: 1px;
`;
export const ProjectGrowth = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  justify-content: flex-start;
  margin-top: 20px;
  flex-wrap: wrap;
`;
export const ProjectEvents = styled.div`
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
export const Number = styled.div`
  font-weight: 700;
  font-size: 40px;
  line-height: 120%;
  color: #ffffff;
`;
export const Events = styled.div`
  font-weight: 200;
  font-size: 18px;
  color: #ffffff;
`;
export const InvestorSection = styled.div`
  display: block;
  padding-bottom: 10%;
`;
export const InvestorContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
  padding: 50px;
  margin: 0 auto;
  gap: 20px;
`;
export const InvestorCard = styled.div`
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
export const FooterSection = styled.div`
  padding: 80px 15%;
  background: #000;
  @media screen and (max-width: 1024px) {
    padding: 80px 10%;
  }
`;
export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  gap: 10px;
`;
export const Copyrights = styled.div`
  font-weight: 200;
  font-size: 18px;
  color: #ffffff;
  opacity: 0.3;
  letter-spacing: 1px;
`;
export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
export const Navlink = styled.div`
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 120%;
  color: #ffffff;
  cursor: pointer;
`;
export const RoadmapInvestors = styled.div`
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

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
`;
export const Wrapper = styled.div`
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
export const MainContainer = styled.div`
  display: flex;
  min-width: 350px;
  width: 100%;
`;
export const Line = styled.hr`
  position: relative;
  border: 1px solid #ffffff;
  transform: rotate(90deg) skewX(12deg);
  max-height: 321px;
  left: 150px;
  top: 92px;
`;
export const Circle = styled.circle`
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
export const Line1 = styled.hr`
  position: relative;
  border: 1px solid #ffffff;
  transform: rotate(90deg) skewX(-12deg);
  max-height: 321px;
  left: 150px;
  top: 92px;
`;
export const Circle1 = styled.circle`
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
export const UpsideArrow = styled.line`
  position: relative;
  border: 1px solid #fff;
  height: 50px;
  left: 285px;
  top: 156px;
`;
export const DownArrow = styled.line`
  position: relative;
  border: 1px solid #fff;
  height: 50px;
  left: 287px;
  top: 308px;
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 301px;
  width: 100%;
  position: relative;
  left: 176px;
  top: 38px;
`;
export const Heading = styled.h2`
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
`;
export const Data = styled.div`
  font-weight: 300;
  font-size: 13px;
  color: #fff;
  letter-spacing: 1px;
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  max-width: 301px;
  width: 100%;
  position: relative;
  left: 210px;
  top: -26px;
`;
export const QuarterTitles = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 15%;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 120%;
  color: #e2d1b8;
`;
