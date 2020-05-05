import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEstudiantesComponent } from './crear-estudiantes.component';

describe('CrearEstudiantesComponent', () => {
  let component: CrearEstudiantesComponent;
  let fixture: ComponentFixture<CrearEstudiantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearEstudiantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
