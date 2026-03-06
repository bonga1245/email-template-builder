import { Component } from '@angular/core';
import { HeaderBlockComponent } from './design-system/components/header-block/header-block.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderBlockComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
