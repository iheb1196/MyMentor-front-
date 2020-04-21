import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  requests = []
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.listRequest({ email: this.apiService.user.email }).subscribe((data: any) => {
      this.requests = data;
    })
  }
  updateRequest(_id, state) {
    this.apiService.updateRequest({ _id, state }).subscribe((data: any) => {
      this.ngOnInit()
    })
  }

}
