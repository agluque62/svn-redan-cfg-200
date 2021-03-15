import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewayHardwareComponent } from './gateway-hardware.component';

describe('GatewayHardwareComponent', () => {
  let component: GatewayHardwareComponent;
  let fixture: ComponentFixture<GatewayHardwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatewayHardwareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatewayHardwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
