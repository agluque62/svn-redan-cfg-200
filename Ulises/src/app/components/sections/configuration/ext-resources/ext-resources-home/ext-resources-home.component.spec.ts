import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtResourcesHomeComponent } from './ext-resources-home.component';

describe('ExtResourcesComponent', () => {
  let component: ExtResourcesHomeComponent;
  let fixture: ComponentFixture<ExtResourcesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtResourcesHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtResourcesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
