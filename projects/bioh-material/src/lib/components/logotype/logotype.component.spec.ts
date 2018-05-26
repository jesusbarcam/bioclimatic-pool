import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyLogotypeComponent } from './company-logotype.component';

describe('CompanyLogotypeComponent', () => {
  let component: CompanyLogotypeComponent;
  let fixture: ComponentFixture<CompanyLogotypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyLogotypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyLogotypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
