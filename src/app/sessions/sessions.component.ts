import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {
  

  sessions;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    // this.apiService.getSessions(this.apiService.user.email).subscribe((data) => {
    //   console.log(data);
    //   this.sessions = data;
    // });
    this.apiService.listMentors('').subscribe((data: any) => {
      console.log(data);
      this.sessions = data.users.filter(u => (u.sessions || []).includes(this.apiService.user._id));
    })
  }
  updateReview(_id, score) {
    console.log(_id, score,);
    this.apiService.updateReview(_id, score).subscribe((data) => {
      console.log(data);
      
      

    })
  }
}
