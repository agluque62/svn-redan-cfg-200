import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersProfileLegendComponent } from './users-profile-legend.component';


describe('UsersProfileLegendComponent', () => {
  let component: UsersProfileLegendComponent;
  let fixture: ComponentFixture<UsersProfileLegendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersProfileLegendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersProfileLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
