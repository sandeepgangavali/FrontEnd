import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from './Register';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrartionService {

  private registerUrl:string="http://localhost:8082/register";
  private tokenUrl:string="http://localhost:8081/authenticate";

  constructor(private http: HttpClient) { }

  postRegData (data): Observable<Register> {
    return this.http.post<Register>(this.registerUrl, data);
  }

  getToken(data):Observable<Register>{
     return this.http.post<Register>(this.tokenUrl,data)
  }
}
