import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGeocacherComponent } from './new-geocacher.component';

describe('NewGeocacherComponent', () => {
  let component: NewGeocacherComponent;
  let fixture: ComponentFixture<NewGeocacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGeocacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGeocacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
