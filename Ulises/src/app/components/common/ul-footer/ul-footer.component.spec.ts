import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UlFooterComponent } from './ul-footer.component';

describe('UlFooterComponent', () => {
  let component: UlFooterComponent;
  let fixture: ComponentFixture<UlFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UlFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UlFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
