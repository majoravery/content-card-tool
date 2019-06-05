type Horizontal = "Horizontal";
export const Horizontal: Horizontal = "Horizontal";

type HorizontalOnImage = "HorizontalOnImage";
export const HorizontalOnImage: HorizontalOnImage = "HorizontalOnImage";

export type InAppKind = Horizontal | HorizontalOnImage;
export const InAppKinds = [Horizontal, HorizontalOnImage];

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
  legalText?: string;
};

export type InAppConfig = SimpleConfig;
