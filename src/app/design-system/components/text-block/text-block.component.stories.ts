import type { Meta, StoryObj } from '@storybook/angular';
import { TextBlockComponent } from './text-block.component';

const meta: Meta<TextBlockComponent> = {
  title: 'Email Template Builder/Text Block',
  component: TextBlockComponent
};

export default meta;
type Story = StoryObj<TextBlockComponent>;

export const Left: Story = {
  args: {
    content: 'Welcome to Everlytic mail builder.',
    alignment: 'left'
  }
};

export const Center: Story = {
  args: {
    content: 'This paragraph is centered.',
    alignment: 'center'
  }
};

export const Right: Story = {
  args: {
    content: 'This paragraph is right aligned.',
    alignment: 'right'
  }
};
