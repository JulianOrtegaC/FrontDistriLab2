import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionMateriasComponent } from './creacion-materias.component';

describe('CreacionMateriasComponent', () => {
  let component: CreacionMateriasComponent;
  let fixture: ComponentFixture<CreacionMateriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacionMateriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreacionMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
