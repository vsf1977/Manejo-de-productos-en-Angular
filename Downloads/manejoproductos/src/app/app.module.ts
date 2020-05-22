import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { DatabaseService } from './servicios/database.service';
import { DatosService } from './servicios/datos.service';
import { CommonModule } from '@angular/common';
import { BarraNavegacionComponent } from './componentes/barra-navegacion/barra-navegacion.component';
import { MainComponent } from './componentes/main/main.component';
import { AgregarComponent } from './componentes/agregar/agregar.component';
import { EditarComponent } from './componentes/editar/editar.component';
import { FiltroPipe } from './filtro.pipe';
import { OrdenPipe } from './orden.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BarraNavegacionComponent,
    MainComponent,
    AgregarComponent,
    EditarComponent,
    FiltroPipe,
    OrdenPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [DatabaseService, DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
