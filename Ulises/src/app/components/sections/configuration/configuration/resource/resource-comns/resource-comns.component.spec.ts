import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceComnsComponent } from './resource-comns.component';

describe('ResourceComnsComponent', () => {
  let component: ResourceComnsComponent;
  let fixture: ComponentFixture<ResourceComnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceComnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceComnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
