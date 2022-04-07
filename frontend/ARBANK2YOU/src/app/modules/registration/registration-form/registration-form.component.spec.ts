import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RegistrationFormComponent } from './registration-form.component';

describe('RegistrationFormComponent', () => {
  let component: RegistrationFormComponent;
  let fixture: ComponentFixture<RegistrationFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationFormComponent ],
      imports: [ HttpClientModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have full name input', ()=>{
    expect(document.querySelector('.input-name')).toBeTruthy();
  });

  it('should have email input', ()=>{
    expect(document.querySelector('.input-email')).toBeTruthy();
  });

  it('should have address input', ()=>{
    expect(document.querySelector('.input-address')).toBeTruthy();
  });

  it('should have phoneNumber input', ()=>{
    expect(document.querySelector('.input-phone-number')).toBeTruthy();
  });

  it('should have nationalId input', ()=>{
    expect(document.querySelector('.input-national-id')).toBeTruthy();
  });

  it('should have birth date input', ()=>{
    expect(document.querySelector('.input-birth-date')).toBeTruthy();
  });

  it('should have send button', ()=>{
    expect(document.querySelector('.btn-send')).toBeTruthy();
  })

});
