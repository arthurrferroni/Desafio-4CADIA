import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports:[HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have bank dropdown', () => {
    expect(document.querySelector('.select-bank')).toBeTruthy();
  });

  it('should show available balance', () => {
    expect(document.querySelector('.available-balance')).toBeTruthy();
  });

  it('should show five days balance graph', () => {
    expect(document.querySelector('.recent-balance-updates')).toBeTruthy();
  });

  it('should show financial score estimate graph', () => {
    expect(document.querySelector('.score-graph')).toBeTruthy();
  });


});
