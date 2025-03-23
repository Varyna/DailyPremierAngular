import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Apartaments } from '../interfaces/apartaments.interface';

@Injectable({
  providedIn: 'root'
})
export class ApartamentService {
  http:HttpClient = inject(HttpClient)
  baseApiUrl = 'http://localhost:5161/api'
  constructor() { }

  get(){
     return this.http.get<Apartaments[]>(`${this.baseApiUrl}/Apartaments/GetItems`)
  }
}
