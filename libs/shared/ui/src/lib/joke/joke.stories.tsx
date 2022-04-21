import { Story, Meta } from '@storybook/react';
import { Joke, JokeProps } from './joke';

export default {
  component: Joke,
  title: 'Joke',
} as Meta;

const Template: Story<JokeProps> = (args) => <Joke {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  setup: 'What’s Forrest Gump’s password?',
  punchline: '1forrest1',
};
