import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextBlockComponent } from './text-block.component';

describe('TextBlockComponent', () => {
  let component: TextBlockComponent;
  let fixture: ComponentFixture<TextBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextBlockComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TextBlockComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('content', 'Hello world');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the content', () => {
    const el: HTMLElement = fixture.nativeElement.querySelector('.text-block');
    expect(el.textContent).toBe('Hello world');
  });

  it('should default alignment to left', () => {
    const el: HTMLElement = fixture.nativeElement.querySelector('.text-block');
    expect(el.style.textAlign).toBe('left');
  });

  it('should apply the alignment input', () => {
    fixture.componentRef.setInput('alignment', 'center');
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement.querySelector('.text-block');
    expect(el.style.textAlign).toBe('center');
  });
});
