// This file is getting too large. TODO: Split in modules

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SwapiListLayoutComponent } from './components/swapi-list-layout/swapi-list-layout.component';

import {
  SearchService,
  SwapiService,
  UserService
} from './services';

import { AuthentificationGuard } from './guards/authentification.guard';
import { swapiReducer } from './store/swapi.reducers';
import { EffectsModule } from '@ngrx/effects';
import { SearchEffects } from './store/swapi.effects';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListItemComponent,
    LoginFormComponent,
    SearchFormComponent,
    TopBarComponent,
    SwapiListLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({app: swapiReducer}),
    EffectsModule.forRoot([SearchEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [
    AuthentificationGuard,
    SearchService,
    SwapiService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
