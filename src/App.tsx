import React, { useState } from 'react';
import styled from 'styled-components';
import {
  ContentCardConfig,
  Background,
  DashboxImage,
  AdZones
} from './ContentCardConfig';
import Editor from './editor/Editor';
import Preview from './preview/Preview';
import Export from './export/Export';

const AppContainer = styled.div`
  display: flex;
  padding: 1em 4em;
  max-width: 1248px;

  @media (max-width: 1200px) {
    padding: 1em;
  }
}`;

const Container = styled.div`
  margin-right: 1em;
  width: 400px;
`;

const emptyConfig = {
  adZones: [AdZones.stream],
  layout: DashboxImage,
  title: 'Spotlight your work with Pro',
  description: 'Feature your best tracks and playlists with a Pro account',
  background: Background.CreatorGradient,
  ctaText: 'Try Pro Unlimited',
  control: false,
  tcode: 't1234'
};

const App: React.FC = () => {
  const [config, setConfig] = useState<ContentCardConfig>(emptyConfig);
  return (
    <AppContainer>
      <Container>
        <Editor config={config} setConfig={setConfig} />
      </Container>
      <Container>
        <Preview config={config} />
      </Container>
      <Container>
        <Export config={config} />
      </Container>
    </AppContainer>
  );
};

export default App;
