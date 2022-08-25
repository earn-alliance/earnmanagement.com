import React from 'react';
import Arrow from 'public/svg/DesignSymbol';
import {
  MissionContainer,
  MissionTitle,
  MissionDescription,
  ContentSection,
  RoadmapInvestors,
} from 'styles/pages/Home';
import ProjectSection from 'views/ProjectSection';
import Investors from 'views/InvestorsSection';
import Roadmap from 'views/Roadmap';

const Mission = () => (
  <>
    <ContentSection>
      <MissionContainer>
        <MissionTitle>
          Our Mission
          <Arrow />
        </MissionTitle>
        <MissionDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare
          hendrerit pharetra. Integer sodales mi libero, sollicitudin euismod
          tortor vestibulum ut. In lobortis at justo in efficitur. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Proin ornare hendrerit
          pharetra. Integer sodales mi libero, sollicitudin euismod tortor
          vestibulum ut. In lobortis at justo in efficitur. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Proin ornare hendrerit
          pharetra. Integer sodales mi libero, sollicitudin euismod tortor
          vestibulum ut. In lobortis at justo in efficitur.
        </MissionDescription>
      </MissionContainer>
      <ProjectSection />
    </ContentSection>
    <RoadmapInvestors>
      <Roadmap />
      <Investors />
      <hr className='border' />
    </RoadmapInvestors>
  </>
);

export default Mission;
