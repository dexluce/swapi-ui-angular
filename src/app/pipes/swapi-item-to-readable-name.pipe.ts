import { Pipe, PipeTransform } from '@angular/core';
import { Item, SwapiType } from '../models';
import { swapiReducer } from '../store/swapi.reducers';

@Pipe({
  name: 'swapiItemToReadableName'
})
export class SwapiItemToReadableNamePipe implements PipeTransform {

  transform(swapiItem: Item) {
    switch (swapiItem.type) {
      case SwapiType.films:
        return swapiItem.title;
        
      default:
        return swapiItem.name;
    }
  }

}
