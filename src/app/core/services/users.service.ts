import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RegisterUserRequest } from '../requests/register-user-request';
import { UserResponse } from '../responses/user-response';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private readonly http: HttpClient) { }

  getAllUsers(): Observable<UserResponse[]> {
    return this.http.get<UserResponse[]>(`${environment.apiUrl}/auth/user`);
  }

  deleteUser(username: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/auth/user/${username}`);
  }

  registerUser(registerUserRequest: RegisterUserRequest) {
    return this.http.post(`${environment.apiUrl}/auth/user`, registerUserRequest);
  }
}
