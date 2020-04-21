import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg = '';
  formLogin: FormGroup;
  constructor(private apiService: ApiService, private router: Router) {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  ngOnInit() {
  }

  login(form) {
    this.msg = ''
    if (form.valid) {
      this.apiService.login(form.value).subscribe((data: any) => {
        if (data.msg === 'ok') {
          localStorage.setItem('user', JSON.stringify(data.user));
          this.apiService.user = data.user;
          if (data.user.role === 'student' || data.user.role === 's-mentor') {
            this.router.navigateByUrl('/student')
          }
          if (data.user.role === 'professor' ) {
            this.router.navigateByUrl('/professor')
          }

          // if (data.user.role === 'mentor' || 'p-mentor2' || 's-mentor') {
          //   this.router.navigateByUrl('/mentor')
          // }
        } else {
          this.msg = data.msg;
        }
      })
    }
  }

}
