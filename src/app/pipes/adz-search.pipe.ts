import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adzSearch'
})
export class AdzSearchPipe implements PipeTransform {

  transform(value: any[], search: String): any[] {
    search = search.trim().toLowerCase();
    if(search.trim() != '') {
      value = value.filter((item) => {
        return item.volumeInfo.title.toLowerCase().includes(search);
      });

      return value;
    }

    return value;
  }

}
