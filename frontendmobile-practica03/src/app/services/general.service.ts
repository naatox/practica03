import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  private apiUrl = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get(`${this.apiUrl}/profile`);
  }
  updateUser(data: any) {
    return this.http.put(`${this.apiUrl}/profile`, data);
  }
  updateTech(data: any, id: number) {
    return this.http.put(`${this.apiUrl}/editTechnology`, data, {params: {id: id}});
  }
  updateHobby(data: any, id: number) {
    return this.http.put(`${this.apiUrl}/editInterest`, data, {params: {id: id}});
  }
}
