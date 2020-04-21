import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,Validators} from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-bea-mentor',
  templateUrl: './bea-mentor.component.html',
  styleUrls: ['./bea-mentor.component.css']
})
export class BeaMentorComponent implements OnInit {
  myForm: FormGroup;
  emails = [];
  msg = '';
  constructor(public apiService: ApiService) {
    this.myForm = new FormGroup({
      name: new FormControl(this.apiService.user.name),
      lastname: new FormControl(this.apiService.user.lastname),
      email: new FormControl(this.apiService.user.email),
      message: new FormControl(''),
      course: new FormControl(''),
      professorEmail: new FormControl(''),
      availibility: new FormControl(''),
      availibilityTime: new FormControl(''),
      transcript: new FormControl(''),
    })
  }

  ngOnInit() {
    this.apiService.getProfessorEmails().subscribe((data: any) => {
      this.emails = data.emails;
    })
  }

  addRequest() {
    if (this.apiService.user.role !== 'professor') {
      console.log(this.myForm.value)
      this.apiService.addRequest(this.myForm.value).subscribe((data: any) => {
        console.log(data.msg)
        
        if(data.msg=== 'ok'){
          this.msg='Your request has been registered'
        }else {
          this.msg=data.msg
        }
        

      })
    }
  

      this.apiService.addMentor(this.myForm.value).subscribe((data) => {
        console.log(data);

      })
    }
  }


