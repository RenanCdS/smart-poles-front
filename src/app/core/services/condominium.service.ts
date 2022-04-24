import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CondominiumResponse } from '../responses/condominium-response';

@Injectable({
  providedIn: 'root'
})
export class CondominiumService {

  constructor(private readonly http: HttpClient) { }

  getCondominiums(): Observable<CondominiumResponse[]> {
    return this.http.get<CondominiumResponse[]>(`${environment.apiUrl}/condominium`);
  }

  deleteCondominium(condominiumId: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/condominium/${condominiumId}`);
  }
}
