import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiLocationComponent } from './api-location.component';

describe('ApiLocationComponent', () => {
  let component: ApiLocationComponent;
  let fixture: ComponentFixture<ApiLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
