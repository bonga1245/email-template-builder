import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'button-block',
  standalone: true,
  templateUrl: './button-block.component.html',
  styleUrl: './button-block.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonBlockComponent {
  @Input() label!: string;
  @Input() url!: string;
  @Input() variant?: 'primary' | 'secondary';
  @Input() align: 'left' | 'center' | 'right' = 'center';
  @Input() bgColor?: string;
}
