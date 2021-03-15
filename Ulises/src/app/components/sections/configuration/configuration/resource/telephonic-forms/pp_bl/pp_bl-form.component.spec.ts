import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PPBLFormComponent } from './pp_bl-form.component';

describe('PPBLFormComponent', () => {
  let component: PPBLFormComponent;
  let fixture: ComponentFixture<PPBLFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PPBLFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PPBLFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
