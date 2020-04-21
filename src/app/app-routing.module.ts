import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { MentorComponent } from './mentor/mentor.component';
import { ProfessorComponent } from './professor/professor.component';
import { BeaMentorComponent } from './bea-mentor/bea-mentor.component';
import { RequestsComponent } from './requests/requests.component';
import { MentorsComponent } from './mentors/mentors.component';
import { SessionsComponent } from './sessions/sessions.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'student', component: StudentComponent },
  { path: 'mentor', component: MentorComponent },
  { path: 'professor', component: ProfessorComponent },
  { path: 'BeaMentor', component: BeaMentorComponent },
  { path: 'requests', component: RequestsComponent },
  { path: 'sessions', component: SessionsComponent },
  { path: 'mentors', component: MentorsComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
