type DashboxImage = 'Image';
export const DashboxImage: DashboxImage = 'Image';

type DashboxIcon = 'Icon';
export const DashboxIcon: DashboxIcon = 'Icon';

export type DashboxLayout = DashboxImage | DashboxIcon;
export const DashboxLayouts = [DashboxImage, DashboxIcon];

export const Background: { [key: string]: string } = {
  CreatorGradient: 'linear-gradient(52deg, #0270e1 20%, #009958 100%)',
  CreatorBlue: '#0270e1',
  CreatorGreen: '#009958',
  ListenerGradient: 'linear-gradient(52deg, #9f34a9 20%, #ff4600 100%)',
  ListenerPink: '#e8308d',
  ListenerPurple: '#6a12d2'
  // EvergreenNeutral: '#f3f3f3'
};

export const AdZones: { [key: string]: string } = {
  stream: 'dashboxStream',
  listen: 'dashboxListen',
  notifications: 'dashboxNotifications',
  tags: 'dashboxTags'
};

export type SimpleConfig = {
  adZones: Array<string>;
  layout: DashboxLayout;
  title: string;
  description: string;
  background: string;
  ctaText: string;
  control: boolean;
  tcode: string;
};

export type ContentCardConfig = SimpleConfig;
