import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'image-block',
  standalone: true,
  templateUrl: './image-block.component.html',
  styleUrl: './image-block.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageBlockComponent {
  @Input() src!: string;
  @Input() alt!: string;
  @Input() width?: string;
}
