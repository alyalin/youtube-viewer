import { Pipe, PipeTransform } from '@angular/core';
import { YtItem } from '../interfaces/yt-response';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: YtItem[], term: string): any[] {
    return items.filter(item => item.snippet.title.toLowerCase().indexOf(term.toLowerCase()) !== -1);
  }
}
