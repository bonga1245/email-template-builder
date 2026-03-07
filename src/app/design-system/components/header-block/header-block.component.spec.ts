import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderBlockComponent } from './header-block.component';

describe('HeaderBlockComponent', () => {
  let component: HeaderBlockComponent;
  let fixture: ComponentFixture<HeaderBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderBlockComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderBlockComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('title', 'Test Title');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title', () => {
    const el: HTMLElement = fixture.nativeElement.querySelector('.header-title');
    expect(el.textContent).toBe('Test Title');
  });

  it('should not show a logo by default', () => {
    const el = fixture.nativeElement.querySelector('.header-logo');
    expect(el).toBeNull();
  });

  it('should show the logo when logoUrl is provided', () => {
    fixture.componentRef.setInput('logoUrl', 'https://example.com/logo.png');
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('.header-logo');
    expect(el).toBeTruthy();
  });
});
