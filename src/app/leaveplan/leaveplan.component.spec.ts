import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveplanComponent } from './leaveplan.component';

describe('LeaveplanComponent', () => {
  let component: LeaveplanComponent;
  let fixture: ComponentFixture<LeaveplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
