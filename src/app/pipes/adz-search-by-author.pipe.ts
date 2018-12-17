import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adzSearchByAuthor'
})
export class AdzSearchByAuthorPipe implements PipeTransform {

  transform(value: any[], search: String): any[] {

    if(search != null) {
      if(search.trim() != '') {
        value = value.filter((item) => {
          if(item.volumeInfo.authors != null)
            return item.volumeInfo.authors.find(el => el == search);
        });
        return value;
      }
    }

    return value;
  }

}
