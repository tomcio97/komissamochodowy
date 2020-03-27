/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ValueTableComponent } from './value-table.component';

describe('ValueTableComponent', () => {
  let component: ValueTableComponent;
  let fixture: ComponentFixture<ValueTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
