type Horizontal = "Horizontal";
export const Horizontal: Horizontal = "Horizontal";

type Vertical = "Vertical";
export const Vertical: Vertical = "Vertical";

export type InAppKind = Horizontal | Vertical;
export const InAppKinds = [Horizontal, Vertical];

export type ButtonConfig = {
  primary: Button;
  secondary: Button;
};
type Button = { text: string; link: string };

export type SimpleConfig = {
  kind: InAppKind;
  headline: string;
  imageUrl: string;
  text: string;
  buttons: ButtonConfig;
  buttonsStacked?: boolean;
  legalText?: string;
};

export type InAppConfig = SimpleConfig;
