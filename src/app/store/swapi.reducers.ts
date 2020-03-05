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

    case ESwapiActions.GetItemByUrlStart:
    case ESwapiActions.SearchStart:
      return {
        ...state,
        error: false,
        loading: true
      }
    
    case ESwapiActions.GetItemByUrlError:
    case ESwapiActions.SearchError:
      return {
        ...state,
        error: true,
        loading: false
      }

    case ESwapiActions.SearchSuccess:
      var urls = new Set(state.items.map(item => item.url));
      return {
        ...state,
        items: [...state.items, ...action.payload.filter(item => !urls.has(item.url))],
        searchResult: action.payload,
        error: false,
        loading: false
      }

    case ESwapiActions.GetItemByUrlSuccess:
      return {
        ...state,
        items: [...state.items, action.payload],
        error: false,
        loading: false,
      }
  
    default:
      return state;
  }
}
