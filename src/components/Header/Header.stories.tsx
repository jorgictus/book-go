import { Story, Meta } from "@storybook/react";
import { Header } from "./";
import { Logo } from "./Logo";
import { Profile, ProfileProps } from "./Profile";

export default {
  title: "Header",
  component: Header,
} as Meta;


const TemplateLogo: Story = (args) => <Logo {...args} />;

const TemplateProfile: Story<ProfileProps> = (args) => <Profile {...args} />;


export const _Logo = TemplateLogo.bind({});
export const _Profile = TemplateProfile.bind({});

_Profile.args = {
  name: "Jorge Andrade",
  email: "jorge.andrade.dev@gmail.com",
  showProfileData: true,
  loggedIn: true,
};
