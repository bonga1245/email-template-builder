import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { TemplateService } from '../services/template.service';
import { BlockType, TemplateBlock, HeaderBlockData, TextBlockData, ImageBlockData, ButtonBlockData } from '../models/template-block.model';
import { HeaderBlockComponent } from '../design-system/components/header-block/header-block.component';
import { TextBlockComponent } from '../design-system/components/text-block/text-block.component';
import { ImageBlockComponent } from '../design-system/components/image-block/image-block.component';
import { ButtonBlockComponent } from '../design-system/components/button-block/button-block.component';

const BLOCK_TYPES: { type: BlockType; label: string }[] = [
  { type: 'header', label: 'Header' },
  { type: 'text',   label: 'Text' },
  { type: 'image',  label: 'Image' },
  { type: 'button', label: 'Button' },
];

@Component({
  selector: 'template-builder',
  standalone: true,
  imports: [HeaderBlockComponent, TextBlockComponent, ImageBlockComponent, ButtonBlockComponent],
  templateUrl: './template-builder.component.html',
  styleUrl: './template-builder.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateBuilderComponent {
  private templateService = inject(TemplateService);

  readonly blockTypes = BLOCK_TYPES;
  readonly blocks = this.templateService.blocks;

  addBlock(type: BlockType): void {
    this.templateService.addBlock(type);
  }

  asHeader(block: TemplateBlock): HeaderBlockData   { return block as HeaderBlockData; }
  asText(block: TemplateBlock): TextBlockData       { return block as TextBlockData; }
  asImage(block: TemplateBlock): ImageBlockData     { return block as ImageBlockData; }
  asButton(block: TemplateBlock): ButtonBlockData   { return block as ButtonBlockData; }
}
