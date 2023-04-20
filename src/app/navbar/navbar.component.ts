import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  public time = new Date();
  public display: any;

  constructor(private route: Router) { }

  ngOnInit(): void {
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }
  logout() {
    this.route.navigate(['/login'])
  }
  navigate(compName: any) {
    this.route.navigate(['/'+compName]);
  }
}
