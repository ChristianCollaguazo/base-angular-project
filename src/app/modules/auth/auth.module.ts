import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthRouting } from './auth.routing';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    SignInComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRouting
  ]
})
export class AuthModule { }
