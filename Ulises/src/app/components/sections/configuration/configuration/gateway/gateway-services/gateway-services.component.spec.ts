import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewayServicesComponent } from './gateway-services.component';

describe('GatewayServicesComponent', () => {
  let component: GatewayServicesComponent;
  let fixture: ComponentFixture<GatewayServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatewayServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatewayServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
