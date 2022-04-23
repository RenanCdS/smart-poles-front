import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationRequest } from '../requests/authentication-request';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private readonly httpClient: HttpClient) { }

  login(authenticationRequest: AuthenticationRequest): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/auth/login`, authenticationRequest);
  }
}
