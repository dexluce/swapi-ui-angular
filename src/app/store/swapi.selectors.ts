import { SwapiState } from './swapi.state';
import { createSelector } from '@ngrx/store';

export const selectSwapi = (state: SwapiState) => state;

export const selectFilters = createSelector(
  selectSwapi,
  (state: SwapiState) => state.filters
);

export const selectSearch = createSelector(
  selectSwapi,
  (state: SwapiState) => state.search
);