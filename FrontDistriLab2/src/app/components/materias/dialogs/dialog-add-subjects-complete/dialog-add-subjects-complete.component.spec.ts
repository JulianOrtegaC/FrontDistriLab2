import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddSubjectsCompleteComponent } from './dialog-add-subjects-complete.component';

describe('DialogAddSubjectsCompleteComponent', () => {
  let component: DialogAddSubjectsCompleteComponent;
  let fixture: ComponentFixture<DialogAddSubjectsCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddSubjectsCompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddSubjectsCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
