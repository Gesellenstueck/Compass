import React from "react";

import Card from "./Card";

export default {
  title: "Example/Card",
  component: Card,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Card {...args} />;

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};
