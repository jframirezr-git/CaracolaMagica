import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MetodosNumericosService {

  constructor(private http: HttpClient) { }

  errorAbsoluto = environment.BASE_URL + '/absolut_mistake';
  errorRelativo = environment.BASE_URL + '/relative_mistake';
  decimalesCorrectos = environment.BASE_URL + '/correct_decimals';
  biseccion = environment.BASE_URL + '/bisection';
  newton = environment.BASE_URL + '/newton';


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
    })
  };

  private extractData(res: Response): any {
    const body = res;
    return body || { };
  }

  errorHandl(error): any {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  absolute(param): any {
    return this.http.post(this.errorAbsoluto, param , this.httpOptions)
      .pipe(
        map(this.extractData),
        catchError(this.errorHandl)
      );
  }

  relative(param): any {
    return this.http.post(this.errorRelativo, param , this.httpOptions)
      .pipe(
        map(this.extractData),
        catchError(this.errorHandl)
      );
  }

  decimals(param): any {
    return this.http.post(this.decimalesCorrectos, param , this.httpOptions)
      .pipe(
        map(this.extractData),
        catchError(this.errorHandl)
      );
  }

  bisections(param): any {
    return this.http.post(this.biseccion, param , this.httpOptions)
      .pipe(
        map(this.extractData),
        catchError(this.errorHandl)
      );
  }

  newtons(param): any {
    return this.http.post(this.newton, param , this.httpOptions)
      .pipe(
        map(this.extractData),
        catchError(this.errorHandl)
      );
  }
}
