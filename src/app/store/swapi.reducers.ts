import { ESwapiActions, SwapiActions } from './swapi.actions';
import { initialSwapiState, SwapiState } from './swapi.state';

export const swapiReducer = (
 state = initialSwapiState,
 action: SwapiActions
): SwapiState => {
  switch (action.type) {
    case ESwapiActions.FiltersChanged:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload]: !state.filters[action.payload]
        }
      }
      
    case ESwapiActions.SearchChanged:
      return {
        ...state,
        search: action.payload
      }

    case ESwapiActions.SearchStart:
      return {
        ...state,
        searchError: false,
        searching: true
      }
    
    case ESwapiActions.SearchError:
      return {
        ...state,
        searchError: true,
        searching: false
      }

    case ESwapiActions.SearchSuccess:
      return {
        ...state,
        searchResult: action.payload,
        searchError: false,
        searching: false
      }

    default:
      return state;
  }
}
