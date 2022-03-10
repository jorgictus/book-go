import { Story, Meta } from "@storybook/react";

import { Card, CardProps } from "./";

export default {
  title: "Card",
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const _Card = Template.bind({});

_Card.args = {
  title: "BookGO",
  authors: ["Jorge Andrade"],
  imageLink:
    "https://images.routledge.com/common/jackets/crclarge/978149873/9781498731447.jpg",
};
