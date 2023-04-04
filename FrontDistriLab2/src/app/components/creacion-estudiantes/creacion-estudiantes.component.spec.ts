import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionEstudiantesComponent } from './creacion-estudiantes.component';

describe('CreacionEstudiantesComponent', () => {
  let component: CreacionEstudiantesComponent;
  let fixture: ComponentFixture<CreacionEstudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacionEstudiantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreacionEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
