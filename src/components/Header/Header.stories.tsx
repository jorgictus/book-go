import { Story, Meta } from "@storybook/react";

import { Header } from "./";
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile, ProfileProps } from "./Profile";
import { SearchBox } from "./SearchBox";

export default {
  title: "Header",
  component: Header,
} as Meta;

const Template: Story = (args) => <Header {...args} />;
const TemplateLogo: Story = (args) => <Logo {...args} />;
const TemplateNotificationsNav: Story = (args) => (
  <NotificationsNav {...args} />
);
const TemplateProfile: Story<ProfileProps> = (args) => <Profile {...args} />;
const TemplateSearchBox: Story = (args) => <SearchBox {...args} />;

export const _Header = Template.bind({});
export const _Logo = TemplateLogo.bind({});
export const _Notifications = TemplateNotificationsNav.bind({});
export const _Profile = TemplateProfile.bind({});
export const _SearchBox = TemplateSearchBox.bind({});

_Profile.args = {
  name: "Jorge Andrade",
  email: "jorge.andrade.dev@gmail.com",
  showProfileData: true,
  loggedIn: true,
};
