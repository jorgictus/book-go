import { Story, Meta } from "@storybook/react";

import {Pagination, PaginationProps} from "./";

export default {
  title: "Pagination",
  component: Pagination,
} as Meta;

const Template: Story<PaginationProps> = (args) => <Pagination {...args} />;

export const _Pagination = Template.bind({});

_Pagination.args = {
    totalCount: 100,
    siblingCount: 1,
    currentPage: 1,
    pageSize: 10,
};
