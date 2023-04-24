import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationInscriptionsComponent } from './creation-inscriptions.component';

describe('CreationInscriptionsComponent', () => {
  let component: CreationInscriptionsComponent;
  let fixture: ComponentFixture<CreationInscriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationInscriptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationInscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
