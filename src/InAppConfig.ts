type Horizontal = "Horizontal";
export const Horizontal: Horizontal = "Horizontal";

type HorizontalOnImage = "HorizontalOnImage";
export const HorizontalOnImage: HorizontalOnImage = "HorizontalOnImage";

export type InAppKind = Horizontal | HorizontalOnImage;
export const InAppKinds = [Horizontal, HorizontalOnImage];

export type InAppConfig = {
  kind?: InAppKind;
};
