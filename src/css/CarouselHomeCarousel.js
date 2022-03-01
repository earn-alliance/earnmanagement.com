import styled from 'styled-components';

const HomeText = styled.h4`
  color: #262a50;
  font-size: 26px;
  text-align: center;
  font-family: 'spartan_mbsemibold';

`;
const HomePara = styled.p`
  margin-top: 10px;
  color: #9fa7b1;
  text-align: center;
  word-spacing: 2px;
  font-size: 12px;
  line-height: 26px;
  font-family: 'outfit400';

`;
const CarouselImage = styled.div`
  /* min-height: 600px; */
  .legend {
    opacity: 1 !important;
    background: transparent !important;
    color: inherit !important;
    bottom: -133px !important;
  }
  .carousel-img {
    max-height: 450px;
    object-fit: contain;
    padding-bottom: 15px;
  }
  
`;
const HomeImageText = styled.div`
  /* display: grid; */
  justify-content: center;
  /* position: absolute; */
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
  .carousel .slide {
    margin-bottom: 100px !important;
  }
  .carousel .control-dots {
    li {
      cursor: pointer;
    }

    bottom: -40px;
    /* @media screen and (max-width: 1400px) {
      bottom: 110px;
    }
    @media screen and (max-width: 1100px) {
      bottom: 120px;
    } */
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
  /* width: 600px;*/
  max-height: 450px; 
  margin-bottom: 30px;
  /* @media screen and (max-height: 700px) {
    display: grid;
    justify-self: center;
    width: 600px;
    height: 450px;
    margin-bottom: 34px;
  } */
  .carousel-img {
    max-height: 400px;
    object-fit: contain;
    max-width: 100%;
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
