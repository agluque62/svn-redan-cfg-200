import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PPABFormComponent } from './pp_ab-form.component';

describe('PPABFormComponent', () => {
  let component: PPABFormComponent;
  let fixture: ComponentFixture<PPABFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PPABFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PPABFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
