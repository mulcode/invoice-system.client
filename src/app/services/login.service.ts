import { inject, Injectable } from '@angular/core';
import { HttpClientService } from '../http-service/http-client.service';
import { LoginRequest } from '../model/LoginRequest.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  httpService = inject(HttpClientService);

  constructor() {}

  login(loginRequest: LoginRequest): Observable<any> {
    return this.httpService.post(
      'http://localhost:5156/Login/login',
      loginRequest
    );
  }
}
