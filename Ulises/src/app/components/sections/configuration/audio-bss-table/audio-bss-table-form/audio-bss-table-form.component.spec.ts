import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioBssTableFormComponent } from './audio-bss-table-form.component';

describe('AudioBssTableFormComponent', () => {
  let component: AudioBssTableFormComponent;
  let fixture: ComponentFixture<AudioBssTableFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioBssTableFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioBssTableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
