import type { Meta, StoryObj } from '@storybook/angular';
import { ImageBlockComponent } from './image-block.component';

const meta: Meta<ImageBlockComponent> = {
  title: 'Email Template Builder/Image Block',
  component: ImageBlockComponent
};

export default meta;
type Story = StoryObj<ImageBlockComponent>;

export const FullWidth: Story = {
  args: {
    src: 'https://placehold.co/800x400?text=Full+Width',
    alt: 'A full width placeholder image'
  }
};

export const HalfWidth: Story = {
  args: {
    src: 'https://placehold.co/400x200?text=Half+Width',
    alt: 'A half width placeholder image',
    width: '50%'
  }
};
