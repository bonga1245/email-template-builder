import { TestBed } from '@angular/core/testing';
import { TemplateService } from './template.service';

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
});
