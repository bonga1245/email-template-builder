import { Component, Input } from '@angular/core';

@Component({
  selector: 'text-block',
  standalone: true,
  templateUrl: './text-block.component.html',
  styleUrl: './text-block.component.scss'
})
export class TextBlockComponent {
  @Input() content: string = '';
  @Input() alignment: any = 'left';
}
