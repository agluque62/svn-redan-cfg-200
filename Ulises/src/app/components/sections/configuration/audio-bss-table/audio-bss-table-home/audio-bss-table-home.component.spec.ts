import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioBssTableHomeComponent } from './audio-bss-table-home.component';

describe('AudioBssTableComponent', () => {
  let component: AudioBssTableHomeComponent;
  let fixture: ComponentFixture<AudioBssTableHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioBssTableHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioBssTableHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
