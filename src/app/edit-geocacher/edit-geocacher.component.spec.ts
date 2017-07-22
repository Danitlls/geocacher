import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGeocacherComponent } from './edit-geocacher.component';

describe('EditGeocacherComponent', () => {
  let component: EditGeocacherComponent;
  let fixture: ComponentFixture<EditGeocacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGeocacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGeocacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
