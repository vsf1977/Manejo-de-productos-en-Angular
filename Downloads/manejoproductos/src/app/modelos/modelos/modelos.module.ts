import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: []
})
export class ModelosModule { }

export class Usermodel {
  correo: string
  clave: string
  nombre : string
}


export class Productmodel
{
  id: number
  nombre : string
  descripcion : string
  fecha_lanz : string
  correo_fab : string
  pais_fab : string
  precio : number
  uni_disp: number
  uni_ven : number
  imagen : string
}
