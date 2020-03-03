import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { SearchFormComponent } from './components/search-form/search-form.component';

import {
  SearchService,
  SwapiService,
  UserService
} from './services';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListItemComponent,
    LoginFormComponent,
    SearchFormComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    SearchService,
    SwapiService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
