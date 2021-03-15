import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PPBCFormComponent } from './pp_bc-form.component';

describe('PPBCFormComponent', () => {
  let component: PPBCFormComponent;
  let fixture: ComponentFixture<PPBCFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PPBCFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PPBCFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
