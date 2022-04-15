import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTaskStatusComponent } from './all-task-status.component';

describe('AllTaskStatusComponent', () => {
  let component: AllTaskStatusComponent;
  let fixture: ComponentFixture<AllTaskStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTaskStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTaskStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
