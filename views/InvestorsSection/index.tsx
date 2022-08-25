import React from 'react';
import Arrow from 'public/svg/DesignSymbol';
import Image from 'next/image';

import {
  InvestorSection,
  DiscoverTitle,
  InvestorContainer,
  InvestorCard,
} from 'styles/pages/Home';

const Investors = () => (
  <InvestorSection>
    <DiscoverTitle>
      <Arrow className='arrow' />
      Investors & Partners
      <Arrow />
    </DiscoverTitle>
    <InvestorContainer>
      {Array.from({ length: 11 }, (_, idx) => `${++idx}`).map((e) => (
        <InvestorCard key={e}>
          <Image
            priority
            src='/images/Tesla.png'
            layout='intrinsic'
            width='155'
            height='25'
            alt='Earn'
          />
        </InvestorCard>
      ))}
    </InvestorContainer>
  </InvestorSection>
);

export default Investors;
