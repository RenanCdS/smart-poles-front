import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CondominiumRoutingModule } from './condominium-routing.module';
import { CondominiumPageComponent } from './pages/condominium-page/condominium-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CondominiumPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    CondominiumRoutingModule
  ]
})
export class CondominiumModule { }
