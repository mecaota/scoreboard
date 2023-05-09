import { ComponentMeta, ComponentStory } from '@storybook/react';

import { BananaButton } from '.';

export default {
  title: 'Molecules/BananaButton',
  component: BananaButton,
} as ComponentMeta<typeof BananaButton>;

export const Default: ComponentStory<typeof BananaButton> = (props) => (
  <BananaButton {...props} />
);
