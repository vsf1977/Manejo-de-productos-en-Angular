import { Component, OnInit } from '@angular/core';
import { Productmodel } from '../../modelos/modelos/modelos.module';
import { DatabaseService } from '../../servicios/database.service';
import { NgForm } from '@angular/forms';
import { DatosService } from '../../servicios/datos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  producto: Productmodel = new Productmodel();
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  paises: string[] = [];
  file: File;
  constructor(private database: DatabaseService, private datos: DatosService) {
    this.ListaPaises();
   }

  ngOnInit() {
  }

  onFileSelected(event) {
    console.log(event);
    this.file = event.target.files[0];
  }


  ListaPaises()  {
    let key: any;
    this.database.getCountry().subscribe((data) =>    {
      if (data) {
        // tslint:disable-next-line: forin
        for (key in data) {
          this.paises.push(data[key].name);
        }
      } else {
        alert('No hay paises para mostrar');
      }
    });
  }


  onSubmit(f: NgForm) {
    const rutaarchivo = 'C:\\Users\\Vladimir\\Pictures\\Camera Roll\\IMG_20180603_182133.jpg';
    // const task = this.storage.upload(rutaarchivo,this.file)
    // this.uploadPercent = task.percentageChanges();
    // this.downloadURL = this.storage.ref(rutaarchivo).getDownloadURL()
    let valido = true;
    if (this.producto.id <= 0) {
      alert('Ingrese un id valido');
      valido = false;
    }
    if (this.producto.uni_disp < 0) {
      alert('Ingrese un valor de unidades disponibles valido');
      valido = false;
    }
    if (this.producto.uni_ven < 0) {
      alert('Ingrese un valor de unidades vendidas valido');
      valido = false;
    }
    if (this.producto.precio < 0) {
      alert('Ingrese un precio valido');
      valido = false;
    }
    if (valido) {
      this.datos.IngresarProducto(this.producto);
    }
  }

}
