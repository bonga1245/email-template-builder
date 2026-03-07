import { Injectable, signal } from '@angular/core';
import { BlockType, TemplateBlock } from '../models/template-block.model';

@Injectable({ providedIn: 'root' })
export class TemplateService {
  private _blocks = signal<TemplateBlock[]>([]);
  readonly blocks = this._blocks.asReadonly();

  addBlock(type: BlockType): string {
    const block = this.createDefaultBlock(type);
    this._blocks.update(blocks => [...blocks, block]);
    return block.id;
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
    const id = crypto.randomUUID();
    switch (type) {
      case 'header':
        return { id, type, title: 'Header Title', logoUrl: 'https://placehold.co/120x40/EEF2FF/6366F1?text=Logo' };
      case 'text':
        return { id, type, content: 'Text Block', alignment: 'left' };
      case 'image':
        return { id, type, src: 'https://placehold.co/600x200/EEF2FF/6366F1?text=Your+Image+Here', alt: 'Placeholder image', width: '100%' };
      case 'button':
        return { id, type, label: 'Click Here', url: '#', align: 'center' };
    }
  }
}
