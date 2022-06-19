import Logo from './logo';

export default {
  component: Logo,
  title: 'Logo',
};

const Template = (args) => <Logo {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
