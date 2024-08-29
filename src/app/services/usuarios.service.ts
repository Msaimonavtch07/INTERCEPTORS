import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http: HttpClient,
  ) { }


  obtenerUsuarios() {

    let params = new HttpParams().append( 'page', '1' );
    params = params.append('nombre', 'Saimon Alvarado');

    /* const headers = new HttpHeaders({
      'token-usuario': 'ASFALHAN133124'
    }); */

    return this.http.get(`https://reqres.in/api/user`, { params, /* headers */ })
        .pipe(

          /* map( resp => resp['toString']), */
          /* catchError( this.manejarErrores ) */
        )

  };

  /* manejarErrores( error: HttpErrorResponse ) {

    console.log('Sucedio un Error');
    console.log('Registrado en el log file');
    console.warn(error);

    return throwError('Error personalizado');

  }; */

}
