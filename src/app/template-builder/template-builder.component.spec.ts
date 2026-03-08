import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemplateBuilderComponent } from './template-builder.component';
import { TemplateService } from '../services/template.service';
import { TextBlockData } from '../models/template-block.model';

describe('TemplateBuilderComponent — form-to-preview data flow', () => {
  let fixture: ComponentFixture<TemplateBuilderComponent>;
  let service: TemplateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateBuilderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateBuilderComponent);
    service = TestBed.inject(TemplateService);
    fixture.detectChanges();
  });

  it('should add a block to the preview when addBlock is called', () => {
    fixture.componentInstance.addBlock('text');
    fixture.detectChanges();

    expect(service.blocks().length).toBe(1);
    expect(service.blocks()[0].type).toBe('text');
  });

  it('should update the preview when a block field is changed via update()', () => {
    fixture.componentInstance.addBlock('text');
    fixture.detectChanges();

    const id = service.blocks()[0].id;
    fixture.componentInstance.update(id, { content: 'Hello from form' });
    fixture.detectChanges();

    const updated = service.blocks()[0] as TextBlockData;
    expect(updated.content).toBe('Hello from form');
  });

  it('should remove a block from the preview when removeBlock is called', () => {
    fixture.componentInstance.addBlock('header');
    fixture.detectChanges();

    const id = service.blocks()[0].id;
    fixture.componentInstance.removeBlock(id);
    fixture.detectChanges();

    expect(service.blocks().length).toBe(0);
  });
});
