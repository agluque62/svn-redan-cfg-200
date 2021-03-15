import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewayGeneralComponent } from './gateway-general.component';

describe('GatewayGeneralComponent', () => {
  let component: GatewayGeneralComponent;
  let fixture: ComponentFixture<GatewayGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatewayGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatewayGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
