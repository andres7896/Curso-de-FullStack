import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintStudentsComponent } from './print-students.component';

describe('PrintStudentsComponent', () => {
  let component: PrintStudentsComponent;
  let fixture: ComponentFixture<PrintStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
