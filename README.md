# SwapiUiAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4.

The goal is to practise with Angular and Typescript

## Structure

This app has a store (NGRX) for storing search result, search parameters, items from Swapi and http call status.

We make use of services for authentication and Api call. Services are responsible of calling actions from the store.

Auth service is not using the store as we don't have any user data to store. We store authentification status in localStorage as a false token.

The call to Swapi are conditionnal for better network perf. SwapiService will get an item only if it's not in the store.

## Missing features

- [-] Styling/CSS
- [x] Resolving items urls in item details
- [ ] add an autocomplete to the search input
- [ ] Paginate the search (we only get first page right now)
- [ ] add a breadcrumbs while navigating beetwin items.
- [x] Add a loading component in top nav bar
- [x] handle network error and display error to user
- [ ] Implement e2e tests
- [ ] Implement unit tests

## Refactore needed

When we reload on a page item, the star wars scroll effect doesn't goes well. This because we should recalculate topLimite's scroll after item has been loaded in DOM. 