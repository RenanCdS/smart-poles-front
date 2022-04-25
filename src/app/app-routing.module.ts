import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TokenGuard } from './core/guards/token.guard';
import { ContainerPageComponent } from './core/pages/container-page/container-page.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: '',
    component: ContainerPageComponent,
    canActivate: [TokenGuard],
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'postes',
        loadChildren: () => import('./poles/poles.module').then(m => m.PolesModule)
      },
      {
        path: 'usuarios',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'condominios',
        loadChildren: () => import('./condominium/condominium.module').then(m => m.CondominiumModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
