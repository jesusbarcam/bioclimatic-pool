import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolsSectionComponent } from './pools-section.component';

describe('PoolsSectionComponent', () => {
  let component: PoolsSectionComponent;
  let fixture: ComponentFixture<PoolsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
