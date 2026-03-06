import type { Meta, StoryObj } from '@storybook/angular';
import { HeaderBlockComponent } from './header-block.component';

const meta: Meta<HeaderBlockComponent> = {
  title: 'Email Template Builder/Header Block',
  component: HeaderBlockComponent
};

export default meta;
type Story = StoryObj<HeaderBlockComponent>;

export const Basic: Story = {
  args: {
    title: 'Your Monthly Newsletter',
    bgColor: '#00B4D8'
  }
};

export const WithLogo: Story = {
  args: {
    title: 'Everlytic Brand Update',
    bgColor: '#2D3748',
    logoUrl: 'https://placehold.co/120x40?text=Everlytic'
  }
};
