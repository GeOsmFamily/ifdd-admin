import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'listFilter'})
export class ListFilterPipe implements PipeTransform {

    transform(list: any[], filterText: string): any[] {
        if(filterText==null){
            return list.filter(item => item.name.search(new RegExp(filterText, 'i'))) 

        }else
        {
            return list
        }
  // return list ? list.filter(item => item.name.search(new RegExp(filterText, 'i')) > -1) : [];
    }
}