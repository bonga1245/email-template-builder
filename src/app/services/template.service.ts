import { Injectable, signal } from '@angular/core';
import { BlockType, TemplateBlock } from '../models/template-block.model';

@Injectable({ providedIn: 'root' })
export class TemplateService {
  private _blocks = signal<TemplateBlock[]>([]);
  readonly blocks = this._blocks.asReadonly();

  addBlock(type: BlockType): void {
    this._blocks.update(blocks => [...blocks, this.createDefaultBlock(type)]);
  }

  updateBlock(id: string, changes: Partial<TemplateBlock>): void {
    this._blocks.update(blocks =>
      blocks.map(block => block.id === id ? { ...block, ...changes } as TemplateBlock : block)
    );
  }

  removeBlock(id: string): void {
    this._blocks.update(blocks => blocks.filter(block => block.id !== id));
  }

  private createDefaultBlock(type: BlockType): TemplateBlock {
    const id = Math.random().toString(36).substring(2);
    switch (type) {
      case 'header':
        return { id, type, title: 'New Header' };
      case 'text':
        return { id, type, content: 'New text block', alignment: 'left' };
      case 'image':
        return { id, type, src: 'https://placehold.co/600x200', alt: 'Placeholder image', width: '100%' };
      case 'button':
        return { id, type, label: 'Click Here', href: '#', align: 'center' };
    }
  }
}
