import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationCopyFormComponent } from './configuration-copy-form.component';

describe('ConfigurationCopyFormComponent', () => {
  let component: ConfigurationCopyFormComponent;
  let fixture: ComponentFixture<ConfigurationCopyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurationCopyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationCopyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
