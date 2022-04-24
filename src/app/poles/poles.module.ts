import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolesRoutingModule } from './poles-routing.module';
import { PolePageComponent } from './pages/pole-page/pole-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [PolePageComponent],
  imports: [
    CommonModule,
    SharedModule,
    PolesRoutingModule
  ]
})
export class PolesModule { }
