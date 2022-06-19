import PulseButton from './pulse-button';

export default {
  component: PulseButton,
  title: 'PulseButton',
};

const Template = (args) => <PulseButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'click me',
};
