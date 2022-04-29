import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CondominiumPageComponent } from './pages/condominium-page/condominium-page.component';
import { CondominiumRegisterPageComponent } from './pages/condominium-register-page/condominium-register-page.component';
import { CondominiumUpdatePageComponent } from './pages/condominium-update-page/condominium-update-page.component';

const routes: Routes = [
  {
    path: '',
    component: CondominiumPageComponent
  },
  {
    path: 'registro',
    component: CondominiumRegisterPageComponent
  },
  {
    path: 'atualizar/:id',
    component: CondominiumUpdatePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CondominiumRoutingModule { }
