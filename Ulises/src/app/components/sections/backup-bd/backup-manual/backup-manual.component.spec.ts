import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackupManualComponent } from './backup-manual.component';

describe('BackupManualComponent', () => {
  let component: BackupManualComponent;
  let fixture: ComponentFixture<BackupManualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackupManualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackupManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
