import { Component, OnInit } from '@angular/core';
import { Productmodel } from '../../modelos/modelos/modelos.module';
import { DatabaseService } from '../../servicios/database.service';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { DatosService } from '../../servicios/datos.service';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  producto: Productmodel = new Productmodel();
  downloadURL: Observable<string>;
  paises: string[] = [];
  file: File;
  REF: any;
  uploadProgress: Observable<unknown>;
  constructor(private database: DatabaseService, private datos: DatosService, private storage: AngularFireStorage) {
    this.ListaPaises();   }

  ngOnInit() {
  }

  onFileSelected(event) {
    let fileid  = '';
    if (!fileid) {
      fileid = Math.random().toString(36).substring(2);
      console.log('se crea codigo');
    }
    this.REF =  this.storage.ref(fileid);
    const task = this.REF.put(event.target.files[0]);
    this.uploadProgress = task.percentageChanges();
    this.REF.getDownloadURL().subscribe((URL) => {
        alert(URL);
      });
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
    const valido = true; /*
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
    }*/
    if (valido) {

    }
  }

}
