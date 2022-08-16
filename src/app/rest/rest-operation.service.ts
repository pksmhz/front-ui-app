import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { OperationRequest } from './operation-request';

@Injectable({
  providedIn: 'root'
})
export class RestOperationService {
  constructor(private http: HttpClient) {

   }

   public send() {
    let request = {
        inputValue: 6,
        operationType: "ADD"
    } as OperationRequest;

    this.http.post(environment.operationUrl, request)
   }
}
