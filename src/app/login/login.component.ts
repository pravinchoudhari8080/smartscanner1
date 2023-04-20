import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../accounts/authentication.service';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  public username = 'gcoec@gmail.com';
  public password = 'cse2023';
  constructor(
    private route: Router,
    private service: AppServiceService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  save() {
    let obj = {
      username: this.username,
      password: this.password,
    };
    this.router.navigate(['upload']);
    // this.service.login(obj).subscribe((res) => {
    //   if (res.token != null || res.token != "") {
    //     this.authenticationService.login(res);
    //     sessionStorage.setItem('loginId', String(res.id));
    //     sessionStorage.setItem('name', res.name);
    //     sessionStorage.setItem('status', 'true');

    //     if (res.id == 1) {
    //       this.router.navigate(['upload']);
    //     } else if (res.id == 2) {
    //       this.router.navigate(['approve']);
    //     }
    //   }
    // });
  }
}
