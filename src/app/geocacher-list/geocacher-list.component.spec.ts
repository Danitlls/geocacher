import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeocacherListComponent } from './geocacher-list.component';

describe('GeocacherListComponent', () => {
  let component: GeocacherListComponent;
  let fixture: ComponentFixture<GeocacherListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeocacherListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeocacherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
