import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productmodel } from '../../modelos/modelos/modelos.module';
import { DatabaseService } from '../../servicios/database.service';
import { NgForm } from '@angular/forms';
import { DatosService } from '../../servicios/datos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  producto: Productmodel = new Productmodel();
  paises: string[] = [];
  file: File;
  constructor(private database: DatabaseService, private datos: DatosService,
              // tslint:disable-next-line: no-shadowed-variable
              private router: Router, private ActivatedRoute: ActivatedRoute) {

    this.ActivatedRoute.params.subscribe(params => {
      // tslint:disable-next-line: no-string-literal
      this.cargarinfo((params['id']));
      this.ListaPaises();
    });
  }

  ngOnInit() {
  }

  ListaPaises()  {
    let key: any;
    this.database.getCountry().subscribe((data) =>    {
      if (data)      {
        // tslint:disable-next-line: forin
        for (key in data) {
          this.paises.push(data[key].name);
        }
      } else {
        alert('No hay paises para mostrar');
      }
    });
  }



  cargarinfo(id: string)  {
    let key: any;
    this.database.getProducts().subscribe((data) =>    {
      for (key in data)      {
        // tslint:disable-next-line: radix
        if (data[key].id === parseInt(id)) {
          this.producto = data[key];
        }
      }
    });
  }

  onSubmit(f: NgForm){

    let valido = true;
    if (this.producto.uni_disp < 0) {
      alert('Ingrese un valor de unidades disponibles valido')
      valido = false;
    }
    if (this.producto.uni_ven < 0) {
      alert('Ingrese un valor de unidades vendidas valido')
      valido = false;
    }
    if (this.producto.precio < 0) {
      alert('Ingrese un precio valido')
      valido = false;
    }
    if (valido) {
      this.datos.EditarProducto(this.producto);
    }
  }

}
