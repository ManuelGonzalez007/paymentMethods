import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaymentMethod } from '../models/payment-method.model';

@Injectable({
  providedIn: 'root',
})
export class PaymentMethodService {
  apiUrl = '/api//v1/paymentMethods/';

  constructor(private http: HttpClient) {}

  getPaymentMethods(): Observable<Object> {
    return this.http.get(this.apiUrl + 'list');
  }

  newPaymentMethod(data: PaymentMethod): Observable<Object> {
    return this.http.post(this.apiUrl + 'create', data);
  }

  updatePaymentDetails(id: string, data: PaymentMethod): Observable<Object> {
    return this.http.put(this.apiUrl + 'update/' + id, data);
  }

  getDetails(id: string): Observable<Object> {
    return this.http.get(this.apiUrl + 'detail/' + id);
  }

  deletePaymentMethod(id: string): Observable<Object> {
    return this.http.delete(this.apiUrl + 'delete/' + id);
  }
}
