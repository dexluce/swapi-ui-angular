import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { SwapiListLayoutComponent } from './components/swapi-list-layout/swapi-list-layout.component';
import { AuthentificationGuard } from './guards/authentification.guard';
import { ItemComponent } from './components/items/item.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginFormComponent,
  },
  {
    path: '',
    component: SwapiListLayoutComponent,
    canActivate: [AuthentificationGuard]
  },
  {
    path: ':type/:id',
    component: ItemComponent,
    canActivate: [AuthentificationGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
