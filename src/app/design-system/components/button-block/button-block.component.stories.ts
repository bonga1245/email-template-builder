import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonBlockComponent } from './button-block.component';

const meta: Meta<ButtonBlockComponent> = {
  title: 'Email Template Builder/Button Block',
  component: ButtonBlockComponent
};

export default meta;
type Story = StoryObj<ButtonBlockComponent>;

export const Basic: Story = {
  args: {
    label: 'Click Here',
    href: 'https://example.com',
    align: 'center'
  }
};

export const LeftAligned: Story = {
  args: {
    label: 'Learn More',
    href: 'https://example.com',
    align: 'left'
  }
};

export const CustomColour: Story = {
  args: {
    label: 'Get Started',
    href: 'https://example.com',
    align: 'center',
    bgColor: '#e63946'
  }
};
