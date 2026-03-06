import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'header-block',
  standalone: true,
  templateUrl: './header-block.component.html',
  styleUrl: './header-block.component.scss'
})
export class HeaderBlockComponent {
  @Input() title: string = '';
  @Input() logoUrl?: string;
  @Input() bgColor: any;
}
