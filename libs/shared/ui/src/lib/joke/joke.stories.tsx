import { Story, Meta } from '@storybook/react';
import { Joke, JokeProps } from './joke';

export default {
  component: Joke,
  title: 'Joke',
} as Meta;

const Template: Story<JokeProps> = (args) => <Joke {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  joke: 'A kid threw a lump of cheddar at me',
};
