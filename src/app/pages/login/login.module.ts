import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: LoginComponent
    }])
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule { }
