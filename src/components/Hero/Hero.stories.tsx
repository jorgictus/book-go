import { Story, Meta } from "@storybook/react";

import { HeroText } from "./";

export default {
  title: "HeroText",
  component: HeroText,
} as Meta;

const Template: Story = (args) => <HeroText {...args} />;

export const _HeroText = Template.bind({});
