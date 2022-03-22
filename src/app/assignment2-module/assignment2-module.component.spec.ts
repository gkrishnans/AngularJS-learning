import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment2ModuleComponent } from './assignment2-module.component';

describe('Assignment2ModuleComponent', () => {
  let component: Assignment2ModuleComponent;
  let fixture: ComponentFixture<Assignment2ModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assignment2ModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Assignment2ModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
