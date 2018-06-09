import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphSummaryComponent } from './paragraph-summary.component';

describe('ParagraphSummaryComponent', () => {
  let component: ParagraphSummaryComponent;
  let fixture: ComponentFixture<ParagraphSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParagraphSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParagraphSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
