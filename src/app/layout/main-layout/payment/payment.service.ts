import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from 'environment'
import { catchError, throwError } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private apiService:ApiService){

  }
  getDataPayment(formData:any) {
    const payUrl=environment.api+'/test'
    return this.apiService.sendRequest(payUrl,'post',formData)
  }
}
