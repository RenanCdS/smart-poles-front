import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegisterPageComponent } from './pages/user-register-page/user-register-page.component';
import { UserUpdatePageComponent } from './pages/user-update-page/user-update-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';

const routes: Routes = [
  {
    path: '',
    component: UsersPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'registro',
    component: UserRegisterPageComponent
  },
  {
    path: 'atualizar/:username',
    component: UserUpdatePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
