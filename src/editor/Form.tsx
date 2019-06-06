import React, {ChangeEvent} from "react";
import {InAppConfig, ButtonConfig} from "../InAppConfig";
import Input from './Input';
import styled from "styled-components";

const StyledInputContainer = styled.div`
  margin-bottom: 1em;
`;

const StyledSectionLabel = styled.div`
  margin-bottom: 0.5em;
  font-weight: 500
`;

type ConfigSetter = React.Dispatch<React.SetStateAction<InAppConfig>>;
type EditorProps = {
  config: InAppConfig;
  setConfig: ConfigSetter;
};

const Form: React.FC<EditorProps> = ({ config, setConfig }) => {
  return (
    <React.Fragment>

      <StyledSectionLabel>General</StyledSectionLabel>
      <StyledInputContainer>
        <Input label='Headline' value={config.headline} onChange={setConfigProp(config, setConfig, "headline")}/>
      </StyledInputContainer>

      <StyledInputContainer>
        <Input label='Image URL' value={config.imageUrl} onChange={setConfigProp(config, setConfig, "imageUrl")}/>
      </StyledInputContainer>

      <StyledInputContainer>
        <Input label='Text' value={config.text} onChange={setConfigProp(config, setConfig, "text")}/>
      </StyledInputContainer>

      <StyledInputContainer>
        <Input label='Legal Text' value={config.legalText || ''}
               onChange={setConfigProp(config, setConfig, "legalText")}/>
      </StyledInputContainer>

      <StyledSectionLabel>Primary Button</StyledSectionLabel>
      <StyledInputContainer>
        <Input label='Text' value={config.buttons.primary.text} onChange={setButtonConfig(config, setConfig, {
          name: "primary",
          prop: "text"
        })}/>
      </StyledInputContainer>

      <StyledInputContainer>
        <Input label='Link' value={config.buttons.primary.link} onChange={setButtonConfig(config, setConfig, {
          name: "primary",
          prop: "link"
        })}/>
      </StyledInputContainer>

      <StyledSectionLabel>Secondary Button</StyledSectionLabel>
      <StyledInputContainer>
        <Input label='Text' value={config.buttons.secondary.text} onChange={setButtonConfig(config, setConfig, {
          name: "secondary",
          prop: "text"
        })}/>
      </StyledInputContainer>

      <StyledInputContainer>

        <Input label='Link' value={config.buttons.secondary.link} onChange={setButtonConfig(config, setConfig, {
          name: "secondary",
          prop: "link"
        })}/>
      </StyledInputContainer>

    </React.Fragment>
  );
};

function setConfigProp(
  config: InAppConfig,
  setConfig: ConfigSetter,
  prop: keyof InAppConfig
) {
  return function (event: ChangeEvent<HTMLInputElement>) {
    setConfig({
      ...config,
      [prop]: event.currentTarget.value
    });
  };
}

function setButtonConfig(
  config: InAppConfig,
  setConfig: ConfigSetter,
  button: { name: keyof ButtonConfig; prop: "text" | "link" }
) {
  return function (event: ChangeEvent<HTMLInputElement>) {
    setConfig({
      ...config,
      buttons: {
        ...config.buttons,
        [button.name]: {
          ...config.buttons[button.name],
          [button.prop]: event.currentTarget.value
        }
      }
    });
  };
}

export default Form;
