import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MyAccountsComponent } from './my-accounts.component';

describe('MyAccountsComponent', () => {
  let component: MyAccountsComponent;
  let fixture: ComponentFixture<MyAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ MyAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should have link account button', () => {
    expect(document.querySelector('.link-account')).toBeTruthy();
  });

  it ('should have some account cards', () => {
    expect(document.querySelectorAll('.account-card').length).toBeGreaterThan(0);
  })
  
});
