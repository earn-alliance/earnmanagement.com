import React from 'react';
import Discord from 'public/svg/DiscordButtonIcon';

import {
  Btn,
  ButtonWrapper,
  Vector,
  VectorWrap,
} from 'styles/components/button';

const Button = ({ content }: any) => {
  return (
    <>
      <ButtonWrapper>
        <Btn>{content}</Btn>
        <VectorWrap>
          <Vector />
        </VectorWrap>
      </ButtonWrapper>
    </>
  );
};

export default Button;
