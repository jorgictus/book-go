import { Story, Meta } from "@storybook/react";

import { Banner } from "./";

export default {
  title: "Banner",
  component: Banner,
} as Meta;

const Template: Story = (args) => <Banner {...args} />;

export const _Banner = Template.bind({});
