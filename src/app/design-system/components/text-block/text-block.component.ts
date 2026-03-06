import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'text-block',
  standalone: true,
  templateUrl: './text-block.component.html',
  styleUrl: './text-block.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextBlockComponent {
  @Input() content!: string;
  @Input() alignment: 'left' | 'center' | 'right' = 'left';
}
