import { EditarComponent } from './componentes/editar/editar.component';
import { MainComponent } from './componentes/main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { AgregarComponent } from './componentes/agregar/agregar.component';


const routes: Routes = [
    {path : 'login', component: LoginComponent },
    {path : 'main', component : MainComponent },
    {path : 'add', component : AgregarComponent },
    {path : 'edit/:id', component : EditarComponent },
    {path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
