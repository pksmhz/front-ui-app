import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AllowedOperationsResponse } from './allowed-operations-response';
import { OperationRequest } from './operation-request';

@Injectable({
  providedIn: 'root'
})
export class RestOperationService {
  constructor(private http: HttpClient) {
      this.allowedOperations = this.getAvailOperations();
   }

   private allowedOperations: Observable<AllowedOperationsResponse>;

   public getAllowedOperations(): Observable<AllowedOperationsResponse> {
    debugger;
    return this.allowedOperations;
   }
   
   public send(type: string, value: number) {
    let request = {
        inputValue: value,
        operationType: type
    } as OperationRequest;

    console.log("Sending: " + JSON.stringify(request))
    console.log("To: " + environment.operationUrl)
    return this.http.post(environment.operationUrl, request)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
   }

   private getAvailOperations(): Observable<AllowedOperationsResponse> {
    return this.http.post<AllowedOperationsResponse>(environment.allowedOperationsUrl, null)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
   }

   private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
