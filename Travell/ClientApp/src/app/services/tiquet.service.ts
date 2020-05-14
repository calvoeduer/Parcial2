import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tiquet } from '../models/tiquet';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HandleHttpErrorService } from '../@base/handle-http-error-service';
import { inject } from '@angular/core/testing';
import { Ruta } from '../models/ruta';
import { Persona } from '../models/persona';

const httpOptionsPut = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  responseType: 'text'
};

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TiquetService {


  baseUrl:string;
  constructor(

    private http:HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService : HandleHttpErrorService
  )
   {
     this.baseUrl = baseUrl;
   }

   saveTiquet( tiquet : Tiquet ) : Observable<Tiquet>{
     return this.http.post<Tiquet>(this.baseUrl + 'api/Tiquets', tiquet)
     .pipe(
      tap(_ => this.handleErrorService.log('Guardado con exito')),
      catchError(this.handleErrorService.handleError<Tiquet>('Registrar tiquet', null))
     );

  }

  getTiquets(): Observable<Tiquet[]>{
    return this.http.get<Tiquet[]>(this.baseUrl + 'api/Tiquets')

    .pipe(
      tap(_ => this.handleErrorService.log('Datos del Tiquet')),
      catchError(this.handleErrorService.handleError<Tiquet[]>('Consulta Tiquet', null))
    );
  }

  getRutas(): Observable<Ruta[]> {
    return this.http.get<Ruta[]>(this.baseUrl + 'api/Tiquets/Rutas')
      .pipe(
        tap(_ => this.handleErrorService.log('Rutas obtenidas')),
        catchError(this.handleErrorService.handleError<Ruta[]>('Obtener rutas', []))
      );
  }

  savePersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.baseUrl + 'api/Tiquets/Personas', persona)
    .pipe(
      tap(_ => this.handleErrorService.log('Persona guardada')),
      catchError(this.handleErrorService.handleError<Persona>('Guardar persona', null))
    );
  }

}
