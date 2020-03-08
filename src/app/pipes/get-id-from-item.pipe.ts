import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../models';

@Pipe({
  name: 'getIdFromItem'
})
export class GetIdFromItemPipe implements PipeTransform {

  transform(item: Item) {
    if (!item) return;
    const paths = item.url.split("/");
    return paths[paths.length - 2];
  }

}
