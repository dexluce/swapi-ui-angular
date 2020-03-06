import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../models';
import { Observable } from 'rxjs';
import { SwapiService } from '../services';

@Pipe({
  name: 'resolveItemFromUrl'
})
export class ResolveItemFromUrlPipe implements PipeTransform {

  constructor(private swapiService: SwapiService) {}

  transform(value: string): Observable<Item> {
    return this.swapiService.getItemByUrl(value);
  }

}
