import React from 'react';
import {
  MainWrapper,
  Wrapper,
  MainContainer,
  Line,
  Circle,
  Line1,
  Circle1,
  UpsideArrow,
  DownArrow,
  ContentWrapper,
  Heading,
  Data,
  ContentContainer,
  QuarterTitles,
} from 'styles/pages/Home';
import Arrow from 'public/svg/DesignSymbol';
import { DiscoverTitle } from 'styles/pages/Home';

const Roadmap = () => (
  <>
    <DiscoverTitle>
      <Arrow className='arrow' />
      Roadmap
      <Arrow />
    </DiscoverTitle>
    <QuarterTitles>
      <div>Q4 2022</div>
      <div>Q1 2022</div>
    </QuarterTitles>
    <MainWrapper>
      <Wrapper>
        <MainContainer>
          <Line></Line>
          <Circle></Circle>
          <UpsideArrow></UpsideArrow>
          <ContentWrapper>
            <Heading>Lorem Ipsum</Heading>
            <Data>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, Pr at
              justo in efficitur.
            </Data>
          </ContentWrapper>
        </MainContainer>
        <MainContainer>
          <Line1></Line1>
          <Circle1></Circle1>
          <DownArrow></DownArrow>
          <ContentContainer>
            <Heading>Lorem Ipsum</Heading>
            <Data>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, Pr at
              justo in efficitur.
            </Data>
          </ContentContainer>
        </MainContainer>
        <MainContainer>
          <Line></Line>
          <Circle></Circle>
          <UpsideArrow></UpsideArrow>
          <ContentWrapper>
            <Heading>Lorem Ipsum</Heading>
            <Data>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, Pr at
              justo in efficitur.
            </Data>
          </ContentWrapper>
        </MainContainer>
        <MainContainer>
          <Line1></Line1>
          <Circle1></Circle1>
          <DownArrow></DownArrow>
          <ContentContainer>
            <Heading>Lorem Ipsum</Heading>
            <Data>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, Pr at
              justo in efficitur.
            </Data>
          </ContentContainer>
        </MainContainer>
        <MainContainer>
          <Line></Line>
          <Circle></Circle>
          <UpsideArrow></UpsideArrow>
          <ContentWrapper>
            <Heading>Lorem Ipsum</Heading>
            <Data>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, Pr at
              justo in efficitur.
            </Data>
          </ContentWrapper>
        </MainContainer>
        <MainContainer>
          <Line1></Line1>
          <Circle1></Circle1>
          <DownArrow></DownArrow>
          <ContentContainer>
            <Heading>Lorem Ipsum</Heading>
            <Data>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, Pr at
              justo in efficitur.
            </Data>
          </ContentContainer>
        </MainContainer>
        <MainContainer>
          <Line></Line>
          <Circle></Circle>
          <UpsideArrow></UpsideArrow>
          <ContentWrapper>
            <Heading>Lorem Ipsum</Heading>
            <Data>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, Pr at
              justo in efficitur.
            </Data>
          </ContentWrapper>
        </MainContainer>
        <MainContainer>
          <Line1></Line1>
          <Circle1></Circle1>
          <DownArrow></DownArrow>
          <ContentContainer>
            <Heading>Lorem Ipsum</Heading>
            <Data>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, Pr at
              justo in efficitur.
            </Data>
          </ContentContainer>
        </MainContainer>
      </Wrapper>
    </MainWrapper>
  </>
);

export default Roadmap;
