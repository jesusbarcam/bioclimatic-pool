import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiohWallpaperComponent } from './bioh-wallpaper.component';

describe('BiohWallpaperComponent', () => {
  let component: BiohWallpaperComponent;
  let fixture: ComponentFixture<BiohWallpaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiohWallpaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiohWallpaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
