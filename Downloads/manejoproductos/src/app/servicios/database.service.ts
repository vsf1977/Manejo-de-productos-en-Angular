import { Injectable } from '@angular/core';
import { Usermodel, Productmodel } from '../modelos/modelos/modelos.module';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable()
export class DatabaseService {

  respuesta: any;
  constructor(private http: HttpClient) { }

  getUsers(): Observable<Usermodel[]> {
    return this.http.get<Usermodel[]>('https://prueba-1a6f0.firebaseio.com/usuarios/.json');
  }

  getProducts(): Observable<Productmodel[]> {
    return this.http.get<Productmodel[]>('https://prueba-1a6f0.firebaseio.com/productos/.json');
  }

  deleteProduct(key: string) {
    // tslint:disable-next-line: max-line-length
    return this.http.delete('https://prueba-1a6f0.firebaseio.com/productos/' + key + '/.json');
}

  getCountry(): Observable<any>{
    return this.http.get<any>('https://restcountries.eu/rest/v2/all');
  }

  saveProduct(producto: Productmodel): Observable<number> {
    const datos = JSON.stringify(producto);
    return this.http.post<number>('https://prueba-1a6f0.firebaseio.com/productos/.json', datos);
  }

  editProduct(producto: Productmodel, key: string): Observable<number> {
    const datos = JSON.stringify(producto);
    return this.http.put<number>('https://prueba-1a6f0.firebaseio.com/productos/' + key + '/.json', datos);
  }

}
