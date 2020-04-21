import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeaMentorComponent } from './bea-mentor.component';

describe('BeaMentorComponent', () => {
  let component: BeaMentorComponent;
  let fixture: ComponentFixture<BeaMentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeaMentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeaMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
