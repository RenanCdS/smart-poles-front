import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private readonly TOKEN = "token";
  constructor() { }

  saveToken(token: string): void {
    localStorage.setItem(this.TOKEN, token);
  }

  getToken(): string {
    return localStorage.getItem(this.TOKEN);
  }

  isAdmin(): boolean {
    const claims = this.getTokenClaims();
    return claims.role === 'ADM';
  }

  getClaim(claimName: string): string {
    return this.getTokenClaims()[claimName];
  }

  clearToken(): void {
    localStorage.removeItem(this.TOKEN);
  }

  private getTokenClaims(): any {
    const token = this.getToken();
    return jwt_decode(token);
  }
}
