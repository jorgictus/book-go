import { Story, Meta } from "@storybook/react";

import { FavoriteButton } from "./Favorite";
import { GoBackButton } from "./GoBack";

export default {
  title: "Buttons",
  component: FavoriteButton,
} as Meta;

const Template: Story = (args) => <FavoriteButton  aria-label='Favorite' {...args} />;
const GoBack: Story = (args) => <GoBackButton  aria-label='Favorite' {...args} />;

export const _FavoriteButton = Template.bind({});
export const _GoBackButton = GoBack.bind({});
