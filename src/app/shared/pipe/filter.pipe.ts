import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, search: any) {
    let filteredList: any = [];
    if (search) {
      let newSearch = !isNaN(search)
        ? search.toString()
        : search.toString().toUpperCase();
      let prop;
      return items.filter((item: any) => {
        for (let key in item) {
          prop = isNaN(item[key])
            ? item[key].toString().toUpperCase()
            : item[key].toString();
          if (prop.indexOf(newSearch) > -1) {
            filteredList.push(item);
            return filteredList;
          }
        }
      });
    } else {
      return items;
    }
  }

}
