import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageBlockComponent } from './image-block.component';

describe('ImageBlockComponent', () => {
  let component: ImageBlockComponent;
  let fixture: ComponentFixture<ImageBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageBlockComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ImageBlockComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('src', 'https://example.com/image.jpg');
    fixture.componentRef.setInput('alt', 'Test image');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the image with correct src and alt', () => {
    const el: HTMLImageElement = fixture.nativeElement.querySelector('.image-block-img');
    expect(el.src).toBe('https://example.com/image.jpg');
    expect(el.alt).toBe('Test image');
  });

  it('should default width to 100%', () => {
    const el: HTMLImageElement = fixture.nativeElement.querySelector('.image-block-img');
    expect(el.style.width).toBe('100%');
  });

  it('should apply a custom width', () => {
    fixture.componentRef.setInput('width', '50%');
    fixture.detectChanges();
    const el: HTMLImageElement = fixture.nativeElement.querySelector('.image-block-img');
    expect(el.style.width).toBe('50%');
  });
});
