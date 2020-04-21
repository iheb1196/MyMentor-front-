import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.css']
})
export class MentorsComponent implements OnInit {
  mentors = [];
  formSearch: FormGroup;
  constructor(private apiService: ApiService) {
    this.formSearch = new FormGroup({
      course: new FormControl('')
    })
  }

  ngOnInit() {
    this.apiService.listMentors('').subscribe((data: any) => {
      console.log(data.users);
      console.log(this.apiService.user._id)
      this.mentors = data.users.filter(u => !(u.sessions || []))/*.includes(this.apiService.user._id))*/
      console.log(data.users);
      
    })
  }

  search() {
    this.apiService.listMentors(this.formSearch.value.course).subscribe((data: any) => {
      console.log(data);
      this.mentors = data.users.filter(u => !(u.sessions || []).includes(this.apiService.user._id));
    })
  }
  addUserRequest(id) {
    this.apiService.addUserRequest(id).subscribe((data: any) => {
      console.log(data);
      this.ngOnInit();
    })
  }

}
