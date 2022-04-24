import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  isLogged = false;

  isAdmin(): boolean {
    return true;
  }
}
