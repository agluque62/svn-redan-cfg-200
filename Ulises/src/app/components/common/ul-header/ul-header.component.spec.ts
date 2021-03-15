import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UlHeaderComponent } from './ul-header.component';

describe('UlHeaderComponent', () => {
  let component: UlHeaderComponent;
  let fixture: ComponentFixture<UlHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UlHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UlHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
