import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPassComponent } from './pages/forgot-pass/forgot-pass.component';


@NgModule({
  declarations: [
    RegistroComponent, 
    LoginComponent,
    ForgotPassComponent
  ],
  imports: [
    CommonModule,
    AuthModule,
  ]
})
export class AuthModule { }
