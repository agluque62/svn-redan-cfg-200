import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATSFormComponent } from './ats-form.component';

describe('ATSFormComponent', () => {
  let component: ATSFormComponent;
  let fixture: ComponentFixture<ATSFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATSFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ATSFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
