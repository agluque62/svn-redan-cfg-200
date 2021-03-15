import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UlSideMenuComponent } from './ul-side-menu.component';

describe('UlSideMenuComponent', () => {
  let component: UlSideMenuComponent;
  let fixture: ComponentFixture<UlSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UlSideMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UlSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
