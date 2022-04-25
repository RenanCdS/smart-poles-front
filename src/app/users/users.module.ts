import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { SharedModule } from '../shared/shared.module';
import { UserRegisterPageComponent } from './pages/user-register-page/user-register-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserUpdatePageComponent } from './pages/user-update-page/user-update-page.component';


@NgModule({
  declarations: [UsersPageComponent, UserRegisterPageComponent, UserUpdatePageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
