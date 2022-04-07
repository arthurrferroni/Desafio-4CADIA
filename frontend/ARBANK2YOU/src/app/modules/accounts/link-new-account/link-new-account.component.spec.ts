import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkNewAccountComponent } from './link-new-account.component';

describe('LinkNewAccountComponent', () => {
  let component: LinkNewAccountComponent;
  let fixture: ComponentFixture<LinkNewAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkNewAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkNewAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a account number input field', () => {
    expect(document.querySelector('.account-number')).toBeTruthy();
  });

  it('should have a account digit number', () => {
    expect(document.querySelector('.account-digit')).toBeTruthy();
  });

  it('should have a bank dropdown', () => {
    expect(document.querySelector('.bank-name')).toBeTruthy();
  });

});
