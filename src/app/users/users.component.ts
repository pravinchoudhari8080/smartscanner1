import { Component, OnInit } from '@angular/core';
import { roles, rolesC, users, usersC } from '../allinterface';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  public user = new usersC();
  public roles: roles[] = []
  public selectedRole = new rolesC()
  constructor(private service: AppServiceService) { }

  ngOnInit(): void {
    this.getroles()
  }
  getroles(){
    this.service.getroles().subscribe((res) => {
      this.roles = res;
    });
  }
  save(){
    this.user.role.id = this.selectedRole.id
    this.service.postuser(this.user).subscribe((res) => {
      this.roles = res;
    });
  }
}
