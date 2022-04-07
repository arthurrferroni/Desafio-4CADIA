import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-accounts',
  templateUrl: './my-accounts.component.html',
  styleUrls: ['./my-accounts.component.scss']
})
export class MyAccountsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  openLinkAccount() {
    this.router.navigateByUrl('/my-accounts/link-account');
  }

  openAccount(id: any) {
    this.router.navigateByUrl('/my-accounts/account-details/'+ id);
  }

}
