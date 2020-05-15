import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class HandleHttpErrorService {

  constructor(private modalService: MatSnackBar) { }
  public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      if (error.status == '500') {
         this.mostrarError500(error);
      }
      if (error.status == '400') {
        this.mostrarError400(error);
      }
      return of(result as T);
    };
  }
 private mostrarError500(error: any) {
    console.error(error);
  }

  public log(message: string) {
    this.modalService.open(message, "Ok")
  }
  private mostrarError400(error: any): void {
  
    console.error(error);
    let contadorValidaciones: number = 0;
    let mensajeValidaciones: string =
      `Señor(a) usuario(a), se han presentado algunos errores de validación, por favor revíselos y vuelva a realizar la operación.`;

    for (const prop in error.error.errors) {
      contadorValidaciones++;
      mensajeValidaciones += `${contadorValidaciones}. ${prop}`;

      error.error.errors[prop].forEach(element => {
        mensajeValidaciones += `${element}` ;
      });

      mensajeValidaciones += ``;
    }

    this.modalService.open(mensajeValidaciones, "Ok");

  }

}
