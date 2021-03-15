import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewayCopyFormComponent } from './gateway-copy-form.component';

describe('GatewayCopyFormComponent', () => {
  let component: GatewayCopyFormComponent;
  let fixture: ComponentFixture<GatewayCopyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatewayCopyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatewayCopyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
