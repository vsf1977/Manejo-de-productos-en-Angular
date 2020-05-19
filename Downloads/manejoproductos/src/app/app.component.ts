import { DatabaseService } from './servicios/database.service';
import { Component } from '@angular/core';
import { DatosService } from './servicios/datos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatosService,DatabaseService]
})
export class AppComponent {
  title = 'app works!';
}
