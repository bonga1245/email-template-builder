import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonBlockComponent } from './button-block.component';

const meta: Meta<ButtonBlockComponent> = {
  title: 'Email Template Builder/Button Block',
  component: ButtonBlockComponent
};

export default meta;
type Story = StoryObj<ButtonBlockComponent>;

export const Primary: Story = {
  args: {
    label: 'Click Here',
    url: 'https://example.com',
    variant: 'primary',
    align: 'center'
  }
};

export const Secondary: Story = {
  args: {
    label: 'Learn More',
    url: 'https://example.com',
    variant: 'secondary',
    align: 'center'
  }
};

export const CustomColour: Story = {
  args: {
    label: 'Get Started',
    url: 'https://example.com',
    align: 'center',
    bgColor: '#e63946'
  }
};
