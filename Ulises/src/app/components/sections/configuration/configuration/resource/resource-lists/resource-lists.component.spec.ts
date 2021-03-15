import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceListsComponent } from './resource-lists.component';

describe('ResourceListsComponent', () => {
  let component: ResourceListsComponent;
  let fixture: ComponentFixture<ResourceListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
