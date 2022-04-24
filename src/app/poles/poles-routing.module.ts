import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PolePageComponent } from './pages/pole-page/pole-page.component';

const routes: Routes = [
  {
    path: '',
    component: PolePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolesRoutingModule { }
