import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry, catchError, throwError, map } from 'rxjs';
import { ICustomerType } from './interface/customertypeex18';

@Injectable({
  providedIn: 'root',
})
export class Customerex18Service {
private _url: string = './assets/dataset/customer.json';

   constructor(private _http: HttpClient) {}

  getCustomerGroups(): Observable<ICustomerType[]> {
    return this._http.get<ICustomerType[]>(this._url)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
}
