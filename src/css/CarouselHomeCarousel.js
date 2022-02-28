import styled from 'styled-components';

const HomeText = styled.div`
  color: #262a50;
  max-width: 600px;
  font-family: 'Spartan';
  font-size: 26px;
  font-weight: 100;
  text-align: center;
`;
const HomePara = styled.div`
  margin-top: 10px;
  max-width: 650px;
  font-family: 'Spartan';
  color: #9fa7b1;
  text-align: center;
  word-spacing: 2px;
  font-size: 12px;
  line-height: 26px;
`;
const CarouselImage = styled.div`
  min-height: 600px;
`;
const HomeImageText = styled.div`
  display: grid;
  justify-content: center;
  position: absolute;
  z-index: 0;
  margin: auto;
  width: 100%;
`;
const HomeImageWrapper = styled.div`
  z-index: 0;
  flex: 1;
  position: relative;
  /* 
  .carousel-img {
    height: 700px;
  } */
  .carousel .control-dots {
    li {
      cursor: pointer;
    }

    bottom: 140px;
    @media screen and (max-width: 1400px) {
      bottom: 110px;
    }
    @media screen and (max-width: 1100px) {
      bottom: 120px;
    }
  }

  .carousel .control-dots .dot.selected,
  .carousel .control-dots .dot {
    margin: 0 5px;
  }
  .carousel .control-dots .dot.selected,
  .carousel .control-dots .dot:hover {
    background: #53badb;
    opacity: 0.8;
  }
`;
const HomeImagescreen = styled.div`
  display: block;
  width: 600px;
  height: 450px;
  margin-bottom: 30px;
  @media screen and (max-height: 700px) {
    display: grid;
    justify-self: center;
    width: 600px;
    height: 450px;
    margin-bottom: 34px;
  }
`;
export {
  HomeText,
  HomePara,
  HomeImageWrapper,
  HomeImageText,
  HomeImagescreen,
  CarouselImage,
};
