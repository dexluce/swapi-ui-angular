import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { SwapiListLayoutComponent } from './components/swapi-list-layout/swapi-list-layout.component';
import { AuthentificationGuard } from './guards/authentification.guard';

const routes: Routes = [
  {
    path: '',
    component: SwapiListLayoutComponent,
    canActivate: [AuthentificationGuard]
  },
  {
    path: 'login',
    component: LoginFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
