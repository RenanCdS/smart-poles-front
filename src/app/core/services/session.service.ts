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

  isTokenValid(): boolean {
    const token = this.getToken();
    if (!token) return false;

    const decodedToken: any = jwt_decode(token);
    const expiration = new Date(decodedToken.exp);

    console.log(expiration.getTime() * 1000);
    console.log(Date.now());

    return expiration.getTime() * 1000 > Date.now();
  }

  private getTokenClaims(): any {
    const token = this.getToken();
    return jwt_decode(token);
  }
}
