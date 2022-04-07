import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-side-area',
  templateUrl: './side-area.component.html',
  styleUrls: ['./side-area.component.scss']
})
export class SideAreaComponent implements OnInit {

  username:string;

  constructor(
    private userService:UserService,
    private router:Router
    ) {

    this.userService.loginChange.subscribe(result => {
      this.username = this.userService.getLoggedUser()?.name;
    })
    
  }

  ngOnInit(): void {

  }

  logout() {
    this.userService.logout();
    this.router.navigateByUrl('login');
  }

  navigateToHome() {
    this.router.navigateByUrl('home');
  }

  navigateToAccounts() {
    this.router.navigateByUrl('my-accounts');
  }

}
