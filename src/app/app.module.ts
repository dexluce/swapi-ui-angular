// This file is getting too large. TODO: Split in modules

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ListComponent } from './components/list/list.component';
import { ItemComponent } from './components/item/item.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SwapiListLayoutComponent } from './components/swapi-list-layout/swapi-list-layout.component';

import {
  SearchService,
  SwapiService,
  UserService
} from './services';

import { AuthentificationGuard } from './guards/authentification.guard';
import { swapiReducer } from './store/swapi.reducers';
import { environment } from 'src/environments/environment';
import { SwapiItemToReadableNamePipe } from './pipes/swapi-item-to-readable-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemComponent,
    LoginFormComponent,
    SearchFormComponent,
    TopBarComponent,
    SwapiListLayoutComponent,
    SwapiItemToReadableNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // not the right way to get an app store
    StoreModule.forRoot({app: swapiReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    MatSlideToggleModule,
    MatProgressSpinnerModule,
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
