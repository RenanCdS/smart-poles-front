import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RegisterPoleRequest } from '../requests/register-pole-request';
import { PoleResponse } from '../responses/pole-response';

@Injectable({
  providedIn: 'root'
})
export class PoleService {

  constructor(private readonly http: HttpClient) { }

  getPoles(): Observable<PoleResponse[]> {
    return this.http.get<PoleResponse[]>(`${environment.apiUrl}/pole`);
  }

  getPoleByCondominiumId(condominiumId: string): Observable<PoleResponse[]> {
    return this.http.get<PoleResponse[]>(`${environment.apiUrl}/pole/${condominiumId}`);
  }

  deletePole(poleId: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/pole/${poleId}`);
  }

  addPole(poleRequest: RegisterPoleRequest): Observable<any> {
    return this.http.post(`${environment.apiUrl}/pole`, poleRequest);
  }
}
