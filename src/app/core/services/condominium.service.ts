import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RegisterCondominiumRequest } from '../requests/register-condominium-request';
import { UpdateCondominiumRequest } from '../requests/update-condominium-request';
import { CondominiumResponse } from '../responses/condominium-response';

@Injectable({
  providedIn: 'root'
})
export class CondominiumService {

  constructor(private readonly http: HttpClient) { }

  getCondominiums(): Observable<CondominiumResponse[]> {
    return this.http.get<CondominiumResponse[]>(`${environment.apiUrl}/condominium`);
  }

  getCondominiumById(condominiumId: string): Observable<CondominiumResponse> {
    return this.http.get<CondominiumResponse>(`${environment.apiUrl}/condominium/${condominiumId}`);
  }

  deleteCondominium(condominiumId: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/condominium/${condominiumId}`);
  }

  registerCondominium(registerCondominiumRequest: RegisterCondominiumRequest): Observable<any> {
    return this.http.post(`${environment.apiUrl}/condominium`, registerCondominiumRequest);
  }

  updateCondominium(updateCondominiumRequest: UpdateCondominiumRequest): Observable<any> {
    return this.http.put(`${environment.apiUrl}/condominium`, updateCondominiumRequest);
  }
}
