import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonBlockComponent } from './button-block.component';

describe('ButtonBlockComponent', () => {
  let component: ButtonBlockComponent;
  let fixture: ComponentFixture<ButtonBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonBlockComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonBlockComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('label', 'Click Here');
    fixture.componentRef.setInput('href', 'https://example.com');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the label', () => {
    const el: HTMLElement = fixture.nativeElement.querySelector('.button-block-link');
    expect(el.textContent?.trim()).toBe('Click Here');
  });

  it('should default align to center', () => {
    const el: HTMLElement = fixture.nativeElement.querySelector('.button-block');
    expect(el.style.textAlign).toBe('center');
  });

  it('should apply a custom bgColor', () => {
    fixture.componentRef.setInput('bgColor', '#e63946');
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement.querySelector('.button-block-link');
    expect(el.style.backgroundColor).toBe('rgb(230, 57, 70)');
  });
});
