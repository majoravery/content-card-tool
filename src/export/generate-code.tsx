/* eslint-disable no-template-curly-in-string */
import { DashboxImage, ContentCardConfig } from '../ContentCardConfig';

export default function generateKvp(
  config: ContentCardConfig
): { [key: string]: string } {
  return {
    adZone: config.adZones.join(','),
    background: config.background,
    contentCardId: '{{campaign.${api_id}}}',
    layout: config.layout === DashboxImage ? 'dashbox-image' : 'dashbox-icon',
    tcode: config.tcode ? config.tcode : '',
    control: config.control ? 'true' : 'false'
  };
}
