import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Page1Component } from './page1.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { DebugElement, ApplicationRef } from '@angular/core';
describe('Page1Component', () => {
  let component: Page1Component;
  let fixture: ComponentFixture<Page1Component>;
  let de: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Page1Component],
      imports: [NgSelectModule, FormsModule, NgbModule, HttpClientModule],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1Component);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    element = de.nativeElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("Suite to test the Settings file", function () {
    it('should display the `Settings` button', () => {
      //There should a create button in view
      expect(element.innerText).toContain("Settings");
    });

    // it('should not display the modal unless the button is clicked', () => {
    //   //source-model is an id for the modal. It shouldn't show up unless create button is clicked
    //   expect(element.innerHTML).not.toContain("staticBackdrop");
    // })

    it('should display the modal when `Setting` is clicked', () => {

      let createPasteButton = fixture.debugElement.query(By.css("#modal_button"));
      //triggerEventHandler simulates a click event on the button object
      createPasteButton.triggerEventHandler('click', null);
      fixture.detectChanges();
      expect(element.innerHTML).toContain("staticBackdrop");


    });
    it('should display dropdown and conatin these values', () =>{
      let control = fixture.debugElement.query(By.css('#exampleFormControlSelect1')).nativeElement;
      control.click();
      fixture.detectChanges();
      expect(component.roles).toContain('None');
      expect(component.roles).toContain('Own Recordings');
      expect(component.roles).toContain('Group Recordings');
      expect(component.roles).toContain('All Recordings');
    })


  });

});

