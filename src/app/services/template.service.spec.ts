import { TestBed } from '@angular/core/testing';
import { TemplateService } from './template.service';
import { TextBlockData } from '../models/template-block.model';

describe('TemplateService', () => {
  let service: TemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplateService);
  });

  it('adds a block', () => {
    service.addBlock('text');
    expect(service.blocks().length).toBe(1);
    expect(service.blocks()[0].type).toBe('text');
  });

  it('removes a block', () => {
    service.addBlock('button');
    const id = service.blocks()[0].id;

    service.removeBlock(id);

    expect(service.blocks().length).toBe(0);
  });

  it('updates a block and reflects the change in blocks signal', () => {
    service.addBlock('text');
    const id = service.blocks()[0].id;

    service.updateBlock(id, { content: 'Updated content' });

    const updated = service.blocks()[0] as TextBlockData;
    expect(updated.content).toBe('Updated content');
  });
});
