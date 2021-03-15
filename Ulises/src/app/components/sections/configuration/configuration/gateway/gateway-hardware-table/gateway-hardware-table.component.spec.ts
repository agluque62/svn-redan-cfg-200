import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewayHardwareTableComponent } from './gateway-hardware-table.component';

describe('GatewayHardwareTableComponent', () => {
  let component: GatewayHardwareTableComponent;
  let fixture: ComponentFixture<GatewayHardwareTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatewayHardwareTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatewayHardwareTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
