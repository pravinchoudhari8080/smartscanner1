import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  public username = '';
  public password = '';
  constructor() { }

  ngOnInit(): void {
  }
  save(){
    
  }
}
