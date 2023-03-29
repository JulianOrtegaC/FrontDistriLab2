import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInscripcionComponent } from './dialog-inscripcion.component';

describe('DialogInscripcionComponent', () => {
  let component: DialogInscripcionComponent;
  let fixture: ComponentFixture<DialogInscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogInscripcionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
