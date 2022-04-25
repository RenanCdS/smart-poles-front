import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolesRoutingModule } from './poles-routing.module';
import { PolePageComponent } from './pages/pole-page/pole-page.component';
import { SharedModule } from '../shared/shared.module';
import { PoleRegisterFormComponent } from './components/pole-register-form/pole-register-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PolePageComponent, PoleRegisterFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    PolesRoutingModule
  ]
})
export class PolesModule { }
