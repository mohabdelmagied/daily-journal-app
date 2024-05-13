import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UuidGeneratorService {

  constructor() { }

  generateUuid() {
    return Math.floor(Math.random() * 1000);
  }
}
