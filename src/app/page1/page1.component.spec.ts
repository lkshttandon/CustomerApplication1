import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1Component } from './page1.component';
import { DebugElement } from '@angular/core';

describe('Page1Component', () => {
  let component: Page1Component;
  let fixture: ComponentFixture<Page1Component>;
  let de:DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1Component);
    component = fixture.componentInstance;
    de=fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
