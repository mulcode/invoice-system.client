import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  private client = inject(HttpClient);

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'token': localStorage.getItem('token')!,
    'isLiftCompany': localStorage.getItem('isLiftCompany')!,
    'isAdmin': localStorage.getItem('isAdmin')!,
    'isTc': localStorage.getItem('isTc')!,
    'companyId': localStorage.getItem('companyId')!,
    'tcId': localStorage.getItem('tcId')!,
    });

    return headers;
  }

  post<T>(uri: string, payload: Object): Observable<T> {
    const headers = this.getHeaders();

    console.log({...headers})

    return this.client.post(uri, payload, {
      headers: headers
    }) as Observable<T>;
  }

  get<T>(uri: string) {
    const headers = this.getHeaders();

    return this.client.get<T>(uri, {
      headers: headers
    }) as Observable<T>;
  }

  put<T>(uri: string, payload: Object): Observable<T> {
    const headers = this.getHeaders();

    return this.client.put(uri, payload, {
      headers: headers
    }) as Observable<T>;
  }

  delete<T>(uri: string, payload: Object): Observable<T> {
    const headers = this.getHeaders();

    return this.client.delete( uri, {
      headers: headers
    }) as Observable<T>;
  }
}
