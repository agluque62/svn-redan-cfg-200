import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtResourcesFormComponent } from './ext-resources-form.component';

describe('ExtResourcesFormComponent', () => {
  let component: ExtResourcesFormComponent;
  let fixture: ComponentFixture<ExtResourcesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtResourcesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtResourcesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
