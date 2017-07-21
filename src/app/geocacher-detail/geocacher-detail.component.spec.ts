import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeocacherDetailComponent } from './geocacher-detail.component';

describe('GeocacherDetailComponent', () => {
  let component: GeocacherDetailComponent;
  let fixture: ComponentFixture<GeocacherDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeocacherDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeocacherDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
