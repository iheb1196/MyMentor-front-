import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  user: any = {};
  constructor(private http: HttpClient) {
    this.user = JSON.parse(localStorage.getItem('user') || '{}')
  }
  login(user) {
    return this.http.post('http://localhost:3000/login', user);
  }
  addRequest(mentor) {
    return this.http.post('http://localhost:3000/addRequest', mentor)
  }
  updateRequest(state) {
    return this.http.post('http://localhost:3000/updateRequest', state)
  }
  listRequest(mentorEmail) {
    return this.http.post('http://localhost:3000/listRequest', mentorEmail)
  }
  addMentor(mentor) {
    return this.http.post('http://localhost:3000/addMentor', mentor)
  }
  getProfessorEmails() {
    return this.http.get('http://localhost:3000/getProfessorsEmails')
  }
  listMentors(course) {
    return this.http.post('http://localhost:3000/listMentors', { course })
  }
  getSessions(email) {
    return this.http.post('http://localhost:3000/sessions', { email })
  }
  updateReview(_id,score) {
    return this.http.post('http://localhost:3000/updateReview', { _id,score })
  }
  addUserRequest(id) {
    return this.http.post('http://localhost:3000/addUserRequest', { userId: this.user._id, requestId: id })
  }
}
