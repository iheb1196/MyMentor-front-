import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user;

  requests: any = [];

  constructor(private router: Router, public apiService: ApiService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user')) || undefined;
    console.log(this.apiService.user)
    this.getUserRequests()
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('/home');
    this.apiService.user = {};
    // location.reload(true);
  }

  getUserRequests() {
    console.log(this.apiService.user.email);
    if (this.apiService.user !== {}) {
      this.apiService.listRequest({ email: this.apiService.user.email }).subscribe((data) => {
        console.log(data);
        this.requests = data;
      });
    }
  }
}
