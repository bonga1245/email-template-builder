import { Component } from '@angular/core';
import { TextBlockComponent } from './design-system/components/text-block/text-block.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TextBlockComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
