import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { AccountDetailsComponent } from './account-details.component';

describe('AccountDetailsComponent', () => {
  let component: AccountDetailsComponent;
  let fixture: ComponentFixture<AccountDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountDetailsComponent ],
      imports: [ RouterModule, HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a bank dropdown', () => {
    expect(document.querySelector('.select-bank')).toBeTruthy();
  });

  it('should have from-to components', () => {
    expect(document.querySelector('.date-from')).toBeTruthy();
    expect(document.querySelector('.date-to')).toBeTruthy();
  });
});
