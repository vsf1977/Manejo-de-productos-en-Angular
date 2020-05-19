import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orden'
})
export class OrdenPipe implements PipeTransform {


  transform(value: any, campo:any,orden:any): any {
    const resultados = []
    if (!value || orden === '' || !orden)
    {
      return value
    }
    if (value.length <= 1)
    {
      return value
    }
    if (!campo || campo === '')
    {
      if(orden==='asc')
      {
        return value.sort()
      }
      else
      {
        return value.sort().reverse()
      }
    }
    for(let item of value)
    {
      resultados.push(item)
    }
    let sw : boolean = true
    let temp : any
    console.log(resultados.length)
    while (sw)
      sw = false
      for (let i=0;i<resultados.length-1;i++)
      {
        if (campo == 'pais')
        {
          if (orden == 'asc')
          {
            if (resultados[i].pais_fab > resultados[i+1].pais_fab)
            {
              temp = resultados[i]
              resultados[i]= resultados[i+1]
              resultados[i+1] = temp
            }
          }
          else
          {
            if (resultados[i].pais_fab < resultados[i+1].pais_fab)
            {
              temp = resultados[i]
              resultados[i] = resultados[i+1]
              resultados[i+1] = temp
            }
          }
        }
        else
        {
          if (orden == 'asc')
          {
            if (resultados[i].nombre > resultados[i+1].nombre)
            {
              temp = resultados[i]
              resultados[i]= resultados[i+1]
              resultados[i+1] = temp
            }
          }
          else
          {
            if (resultados[i].nombre < resultados[i+1].nombre)
            {
              temp = resultados[i]
              resultados[i] = resultados[i+1]
              resultados[i+1] = temp
            }
          }
        }
      }

    return resultados
  }

}
