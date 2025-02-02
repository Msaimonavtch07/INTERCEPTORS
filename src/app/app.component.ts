import { Component } from '@angular/core';

import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'INTERCEPTORESAPP';

  constructor(
    private  usuariosService: UsuariosService,
  ) {

    this.usuariosService.obtenerUsuarios()
      .subscribe( resp => {
        console.log(resp)
      }, (err) => {
        console.log('Error del lado component.ts')
      });


  }

}
