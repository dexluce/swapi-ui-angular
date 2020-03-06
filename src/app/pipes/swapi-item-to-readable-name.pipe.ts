import { Pipe, PipeTransform } from '@angular/core';
import { Item, SwapiType } from '../models';

@Pipe({
  name: 'swapiItemToReadableName'
})
export class SwapiItemToReadableNamePipe implements PipeTransform {

  transform(swapiItem: Item | undefined) {
    if (!swapiItem) return 'loading...'

    switch (swapiItem.type) {
      case SwapiType.films:
        return swapiItem.title;
        
      default:
        return swapiItem.name;
    }
  }

}
