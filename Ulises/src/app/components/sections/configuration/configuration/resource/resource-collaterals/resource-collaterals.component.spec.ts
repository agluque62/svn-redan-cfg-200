import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceCollateralsComponent } from './resource-collaterals.component';

describe('ResourceCollateralsComponent', () => {
  let component: ResourceCollateralsComponent;
  let fixture: ComponentFixture<ResourceCollateralsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceCollateralsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceCollateralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
