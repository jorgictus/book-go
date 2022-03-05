import { Story, Meta } from "@storybook/react";

import { Heading, HeadingProps} from "../components/Heading";

export default {
  title: "Heading",
  component: Heading,
} as Meta;

const Template: Story<HeadingProps> = (args) => <Heading {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  children: "Titulos da aplicação",
};


