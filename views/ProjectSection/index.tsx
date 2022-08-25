import React from 'react';
import Image from 'next/image';
import Arrow from 'public/svg/DesignSymbol';
import {
  ProjectInfo,
  ProjectContainer,
  ProjectRightContainer,
  ProjectLabel,
  ProjectTitle,
  ProjectDescription,
  ProjectGrowth,
  ProjectEvents,
  Number,
  Events,
} from 'styles/pages/Home';
import Button from 'components/button';

const ProjectSection = () => (
  <>
    <ProjectContainer>
      <ProjectInfo>
        <ProjectLabel>Project</ProjectLabel>
        <ProjectTitle>
          Earn Management
          <Arrow className='arrow' />
        </ProjectTitle>
        <ProjectDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare
          hendrerit pharetra. Integer sodales mi libero, sollicitudin euismod
          tortor vestibulum ut. In lobortis at justo in efficitur.
        </ProjectDescription>
        <ProjectGrowth>
          <ProjectEvents>
            <Number>10K+</Number>
            <Events>Scholars managed</Events>
          </ProjectEvents>
          <ProjectEvents>
            <Number>100K+</Number>
            <Events>Assets Tracked</Events>
          </ProjectEvents>
          <ProjectEvents>
            <Number>15M+</Number>
            <Events>SLP transferred</Events>
          </ProjectEvents>
        </ProjectGrowth>
        <Button content='Get Started' />
      </ProjectInfo>
      <Image
        priority
        src='/images/ProjectImage.png'
        layout='intrinsic'
        width='715'
        height='415'
        alt='Earn'
      />
    </ProjectContainer>
    <ProjectRightContainer>
      <Image
        priority
        src='/images/ProjectRightImage.png'
        layout='intrinsic'
        width='715'
        height='415'
        alt='Earn'
      />
      <ProjectInfo>
        <ProjectLabel>Project</ProjectLabel>
        <ProjectTitle>
          Earn Alliance
          <Arrow className='arrow' />
        </ProjectTitle>
        <ProjectDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare
          hendrerit pharetra. Integer sodales mi libero, sollicitudin euismod
          tortor vestibulum ut. In lobortis at justo in efficitur.
        </ProjectDescription>

        <Button content='Get a Preview' />
      </ProjectInfo>
    </ProjectRightContainer>
    <ProjectContainer>
      <ProjectInfo>
        <ProjectLabel>Project</ProjectLabel>
        <ProjectTitle>
          Zom Zom
          <Arrow className='arrow' />
        </ProjectTitle>
        <ProjectDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare
          hendrerit pharetra. Integer sodales mi libero, sollicitudin euismod
          tortor vestibulum ut. In lobortis at justo in efficitur.
        </ProjectDescription>

        <Button content='Get Started' />
      </ProjectInfo>
      <Image
        priority
        src='/images/ProjectImage.png'
        layout='intrinsic'
        width='715'
        height='415'
        alt='Earn'
      />
    </ProjectContainer>
  </>
);

export default ProjectSection;
