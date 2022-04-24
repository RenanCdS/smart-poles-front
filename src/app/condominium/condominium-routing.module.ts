import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CondominiumPageComponent } from './pages/condominium-page/condominium-page.component';

const routes: Routes = [
  {
    path: '',
    component: CondominiumPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CondominiumRoutingModule { }
