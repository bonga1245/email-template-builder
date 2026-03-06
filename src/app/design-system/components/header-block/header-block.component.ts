import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'header-block',
  standalone: true,
  templateUrl: './header-block.component.html',
  styleUrl: './header-block.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderBlockComponent {
  @Input() title!: string;
  @Input() logoUrl?: string;
  @Input() bgColor?: string;
}
