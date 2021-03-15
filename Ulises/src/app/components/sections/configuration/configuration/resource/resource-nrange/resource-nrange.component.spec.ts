import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceNRangeComponent } from './resource-nrange.component';

describe('ResourceNRangeComponent', () => {
  let component: ResourceNRangeComponent;
  let fixture: ComponentFixture<ResourceNRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceNRangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceNRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
