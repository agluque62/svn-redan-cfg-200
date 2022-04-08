import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BkpinfoComponent } from './bkpinfo.component';

describe('ParamsComponent', () => {
  let component: BkpinfoComponent;
  let fixture: ComponentFixture<BkpinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BkpinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BkpinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
