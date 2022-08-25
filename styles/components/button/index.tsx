import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  position: relative;
  margin-top: 20px;
`;
export const Btn = styled.button`
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
export const VectorWrap = styled.div`
  position: absolute;
  filter: drop-shadow(0 0 7px white);
  top: 41px;
  left: 0px;
`;
export const Vector = styled.div`
  clip-path: polygon(0 0, 0 100%, 100% 100%);
  box-shadow: 0 0 10px #fff;
  background: #fff;
  width: 13px;
  height: 13px;
`;
