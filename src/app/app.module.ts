import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestComponent } from '../test/test.component';
import { FirstComponent } from './first/first.component';
import { CeoComponent } from './ceo/ceo.component';
import { DirComponent } from './dir/dir.component';
import { TemplateRegisterComponent } from './template-register/template-register.component';
import { ReactiveRegisterComponent } from './reactive-register/reactive-register.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveLoginComponent } from './reactive-login/reactive-login.component';
import { ConcatenationPipe } from './concatenation.pipe';
import { Router, RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: PostsListComponent },
  { path: 'login', component: ReactiveLoginComponent }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule.forRoot(routes)],
  declarations: [ AppComponent, HelloComponent, TestComponent, 
                  FirstComponent, CeoComponent, DirComponent, 
                  TemplateRegisterComponent, ReactiveRegisterComponent, PostsListComponent, ReactiveLoginComponent, ConcatenationPipe, NavComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
