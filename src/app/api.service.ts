import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(public httpCleint: HttpClient) { }
  getApi() {return this.httpCleint.get("http://worldtimeapi.org/api/timezone/Europe/Dublin");}
  
}
