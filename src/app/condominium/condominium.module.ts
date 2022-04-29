import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CondominiumRoutingModule } from './condominium-routing.module';
import { CondominiumPageComponent } from './pages/condominium-page/condominium-page.component';
import { SharedModule } from '../shared/shared.module';
import { CondominiumRegisterPageComponent } from './pages/condominium-register-page/condominium-register-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CondominiumUpdatePageComponent } from './pages/condominium-update-page/condominium-update-page.component';


@NgModule({
  declarations: [CondominiumPageComponent, CondominiumRegisterPageComponent, CondominiumUpdatePageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    CondominiumRoutingModule
  ]
})
export class CondominiumModule { }
