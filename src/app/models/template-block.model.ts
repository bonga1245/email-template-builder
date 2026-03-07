export type BlockType = 'header' | 'text' | 'image' | 'button';

export interface HeaderBlockData {
  type: 'header';
  id: string;
  title: string;
  logoUrl?: string;
  bgColor?: string;
}

export interface TextBlockData {
  type: 'text';
  id: string;
  content: string;
  alignment: 'left' | 'center' | 'right';
}

export interface ImageBlockData {
  type: 'image';
  id: string;
  src: string;
  alt: string;
  width?: string;
}

export interface ButtonBlockData {
  type: 'button';
  id: string;
  label: string;
  url: string;
  variant?: 'primary' | 'secondary';
  align: 'left' | 'center' | 'right';
  bgColor?: string;
}

export type TemplateBlock = HeaderBlockData | TextBlockData | ImageBlockData | ButtonBlockData;
