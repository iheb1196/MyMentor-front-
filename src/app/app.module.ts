import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { MentorComponent } from './mentor/mentor.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ProfessorComponent } from './professor/professor.component';
import { BeaMentorComponent } from './bea-mentor/bea-mentor.component';
import { RequestsComponent } from './requests/requests.component';
import { MentorsComponent } from './mentors/mentors.component';
import { SessionsComponent } from './sessions/sessions.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    HomeComponent,
    StudentComponent,
    MentorComponent,
    ProfessorComponent,
    BeaMentorComponent,
    RequestsComponent,
    MentorsComponent,
    SessionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
