import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'template-builder',
  standalone: true,
  templateUrl: './template-builder.component.html',
  styleUrl: './template-builder.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateBuilderComponent {}
