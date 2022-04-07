import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }

  isActive:boolean = false;
  user = new User();

  ngOnInit() {
    this.isActive = true;
  }

  register() {
    console.dir(this.user);

    this.userService.registerNewUser(this.user).subscribe(result=> {
      alert ('Ok!');
      this.router.navigateByUrl('/');
    })
  }


}
