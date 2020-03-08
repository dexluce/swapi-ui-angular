// This file is getting too large. TODO: Split in modules

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ListComponent } from './components/list/list.component';
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
import { ResolveItemFromUrlPipe } from './pipes/resolve-item-from-url.pipe';
import { StarWarsScrollEffectDirective } from './directives/star-wars-scroll-effect.directive';
import { GetIdFromItemPipe } from './pipes/get-id-from-item.pipe';
import { GetTypeFromItemPipe } from './pipes/get-type-from-item.pipe';
import { ItemComponent } from './components/items/item.component';
import { FilmComponent } from './components/items/film/film.component';
import { PeopleComponent } from './components/items/people/people.component';
import { PlanetComponent } from './components/items/planet/planet.component';
import { SpeciesComponent } from './components/items/species/species.component';
import { StarshipComponent } from './components/items/starship/starship.component';
import { VehicleComponent } from './components/items/vehicle/vehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemComponent,
    LoginFormComponent,
    SearchFormComponent,
    TopBarComponent,
    SwapiListLayoutComponent,
    SwapiItemToReadableNamePipe,
    ResolveItemFromUrlPipe,
    StarWarsScrollEffectDirective,
    GetIdFromItemPipe,
    GetTypeFromItemPipe,
    FilmComponent,
    PeopleComponent,
    PlanetComponent,
    SpeciesComponent,
    StarshipComponent,
    VehicleComponent,
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
    MatSnackBarModule,
  ],
  providers: [
    AuthentificationGuard,
    SearchService,
    SwapiService,
    UserService,
    GetTypeFromItemPipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
