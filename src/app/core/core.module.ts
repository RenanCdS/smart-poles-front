import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerPageComponent } from './pages/container-page/container-page.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ContainerPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class CoreModule { }
