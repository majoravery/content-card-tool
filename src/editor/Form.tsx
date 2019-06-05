import React, { ChangeEvent } from "react";
import { InAppConfig, ButtonConfig } from "../InAppConfig";

type ConfigSetter = React.Dispatch<React.SetStateAction<InAppConfig>>;
type EditorProps = {
  config: InAppConfig;
  setConfig: ConfigSetter;
};

const Form: React.FC<EditorProps> = ({ config, setConfig }) => {
  return (
    <React.Fragment>
      <input
        type="text"
        value={config.headline}
        onChange={setConfigProp(config, setConfig, "headline")}
      />
      <input
        type="text"
        value={config.imageUrl}
        onChange={setConfigProp(config, setConfig, "imageUrl")}
      />
      <input
        type="text"
        value={config.text}
        onChange={setConfigProp(config, setConfig, "text")}
      />
      <input
        type="text"
        value={config.legalText || ""}
        onChange={setConfigProp(config, setConfig, "legalText")}
      />
      <input
        type="text"
        value={config.buttons.primary.text}
        onChange={setButtonConfig(config, setConfig, {
          name: "primary",
          prop: "text"
        })}
      />
      <input
        type="text"
        value={config.buttons.primary.link}
        onChange={setButtonConfig(config, setConfig, {
          name: "primary",
          prop: "link"
        })}
      />
      <input
        type="text"
        value={config.buttons.secondary.text}
        onChange={setButtonConfig(config, setConfig, {
          name: "secondary",
          prop: "text"
        })}
      />
      <input
        type="text"
        value={config.buttons.secondary.link}
        onChange={setButtonConfig(config, setConfig, {
          name: "secondary",
          prop: "link"
        })}
      />
    </React.Fragment>
  );
};

function setConfigProp(
  config: InAppConfig,
  setConfig: ConfigSetter,
  prop: keyof InAppConfig
) {
  return function(event: ChangeEvent<HTMLInputElement>) {
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
  return function(event: ChangeEvent<HTMLInputElement>) {
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
