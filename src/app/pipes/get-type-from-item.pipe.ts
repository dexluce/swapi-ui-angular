import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../models';

@Pipe({
  name: 'getTypeFromItem'
})
export class GetTypeFromItemPipe implements PipeTransform {

  transform(item: Item) {
    if (!item) return;
    const paths = item.url.split("/");
    return paths[paths.length - 3];
  }

}
