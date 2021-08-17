import React from 'react';
import {
  ContentCardConfig,
  DashboxLayout,
  DashboxLayouts,
  AdZones,
  Background
} from '../ContentCardConfig';
import { Button } from './Buttons';
import Form from './Form';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  margin-bottom: 1em;
`;

const StyledLabel = styled.div`
  margin-bottom: 0.3em;
`;

type LayoutSetter = React.Dispatch<React.SetStateAction<ContentCardConfig>>;

type EditorProps = {
  config: ContentCardConfig;
  setConfig: LayoutSetter;
};

const Editor: React.FC<EditorProps> = ({ config, setConfig }) => {
  return (
    <div>
      <h2>Editor</h2>
      <StyledLabel>Layout</StyledLabel>
      <ButtonContainer>
        {DashboxLayouts.map((layout) => (
          <Button
            key={layout}
            selected={layout === config.layout}
            onClick={setLayout(layout, config, setConfig)}
          >
            {layout}
          </Button>
        ))}
      </ButtonContainer>

      <StyledLabel>Background</StyledLabel>
      <ButtonContainer>
        {Object.keys(Background).map((key) => {
          const value = Background[key];
          return (
            <Button
              key={key}
              selected={value === config.background}
              onClick={setBackground(value, config, setConfig)}
            >
              {key}
            </Button>
          );
        })}
      </ButtonContainer>

      <StyledLabel>Ad zones</StyledLabel>
      <ButtonContainer>
        {Object.keys(AdZones).map((key) => {
          const value = AdZones[key];
          return (
            <Button
              key={key}
              selected={config.adZones.indexOf(value) > -1}
              onClick={setAdZones(value, config, setConfig)}
            >
              {key}
            </Button>
          );
        })}
      </ButtonContainer>
      <Form config={config} setConfig={setConfig} />
    </div>
  );
};

function setLayout(
  layout: DashboxLayout,
  config: ContentCardConfig,
  setConfig: LayoutSetter
) {
  return function() {
    setConfig({
      ...config,
      layout
    });
  };
}

function setBackground(
  background: string,
  config: ContentCardConfig,
  setConfig: LayoutSetter
) {
  return function() {
    setConfig({
      ...config,
      background
    });
  };
}

function setAdZones(
  zone: string,
  config: ContentCardConfig,
  setConfig: LayoutSetter
) {
  return function() {
    if (config.adZones.indexOf(zone) > -1) {
      return setConfig({
        ...config,
        adZones: config.adZones.filter((z) => z !== zone)
      });
    } else {
      return setConfig({
        ...config,
        adZones: [...config.adZones, zone]
      });
    }
  };
}

export default Editor;
