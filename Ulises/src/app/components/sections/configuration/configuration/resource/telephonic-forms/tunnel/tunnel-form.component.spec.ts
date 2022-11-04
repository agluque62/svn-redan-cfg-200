import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TunnelFormComponent } from './tunnel-form.component';

describe('TunnelFormComponent', () => {
  let component: TunnelFormComponent;
  let fixture: ComponentFixture<TunnelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TunnelFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TunnelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
