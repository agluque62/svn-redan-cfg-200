import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LCENFormComponent } from './lcen-form.component';

describe('LCENFormComponent', () => {
  let component: LCENFormComponent;
  let fixture: ComponentFixture<LCENFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LCENFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LCENFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
