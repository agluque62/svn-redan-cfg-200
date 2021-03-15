import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackupHistoricComponent } from './backup-historic.component';

describe('BackupHistoricComponent', () => {
  let component: BackupHistoricComponent;
  let fixture: ComponentFixture<BackupHistoricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackupHistoricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackupHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
