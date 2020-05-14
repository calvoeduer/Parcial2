import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tiquet } from '../models/tiquet';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HandleHttpErrorService } from '../@base/handle-http-error-service';
import { inject } from '@angular/core/testing';

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

   pos( tiquet : Tiquet ) : Observable<Tiquet>{
     return this.http.post<Tiquet>(this.baseUrl + 'api/Tiquet', tiquet)
     .pipe(
      tap(_ => this.handleErrorService.log('Guardado con exito')),
      catchError(this.handleErrorService.handleError<Tiquet>('Registrar tiquet', null))
     );

  }

  get(): Observable<Tiquet[]>{
    return this.http.get<Tiquet[]>(this.baseUrl + 'api/Tiquet')

    .pipe(
      tap(_ => this.handleErrorService.log('Datos del Tiquet Registrados')),
      catchError(this.handleErrorService.handleError<Tiquet[]>('Consulta Tiquet', null))
    );
  }

}
