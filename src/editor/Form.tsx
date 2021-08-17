import React, { ChangeEvent } from 'react';
import { ContentCardConfig } from '../ContentCardConfig';
import Input from './Input';
import styled from 'styled-components';

const StyledInputContainer = styled.div`
  margin-bottom: 1em;
`;

type ConfigSetter = React.Dispatch<React.SetStateAction<ContentCardConfig>>;
type EditorProps = {
  config: ContentCardConfig;
  setConfig: ConfigSetter;
};

const Form: React.FC<EditorProps> = ({ config, setConfig }) => {
  return (
    <React.Fragment>
      <StyledInputContainer>
        <Input
          label="Title"
          value={config.title}
          onChange={setConfigProp(config, setConfig, 'title')}
        />
      </StyledInputContainer>

      <StyledInputContainer>
        <Input
          label="Description"
          value={config.description}
          onChange={setConfigProp(config, setConfig, 'description')}
        />
      </StyledInputContainer>

      <StyledInputContainer>
        <Input
          label="CTA text"
          value={config.ctaText}
          onChange={setConfigProp(config, setConfig, 'ctaText')}
        />
      </StyledInputContainer>

      <StyledInputContainer>
        <Input
          label="Tcode"
          value={config.tcode}
          onChange={setConfigProp(config, setConfig, 'tcode')}
        />
      </StyledInputContainer>

      <StyledInputContainer>
        <label>
          <input
            type="checkbox"
            checked={config.control}
            onChange={setConfigProp(config, setConfig, 'control', 'checked')}
          />
          Control card
        </label>
      </StyledInputContainer>
    </React.Fragment>
  );
};

function setConfigProp(
  config: ContentCardConfig,
  setConfig: ConfigSetter,
  prop: keyof ContentCardConfig,
  valueKey?: 'checked' | 'value'
) {
  return function(event: ChangeEvent<HTMLInputElement>) {
    setConfig({
      ...config,
      [prop]: valueKey
        ? event.currentTarget[valueKey]
        : event.currentTarget.value
    });
  };
}

export default Form;
