import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any, filter: string){
    console.log("Array>>", value);
    console.log("filter", filter);

    if(!!value && filter !== ''){
      return value.filter((elem: any)=>{
        return JSON.stringify(elem).toLocaleLowerCase().includes(filter.toLocaleLowerCase());
      })
    }else{
      return value
    }
  }

}
