import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, arg1:any,arg2:any): any {
    const resultados = []
    for(let item of value)
    {
      if (item.nombre.toUpperCase().indexOf(arg1.toUpperCase()) > -1 && item.pais_fab.toUpperCase().indexOf(arg2.toUpperCase()) > -1)
      {
        resultados.push(item)
      }
    }
    return resultados
  }

}
