import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getLocaleDateFormat } from '@angular/common';

interface Item{
  id:string;
}

@Injectable({
  providedIn: 'root'
})

export class MainService {


constructor(private http: HttpClient) {
}

  getData(){
    return this.http.get('https://swapi.co/api/planets/');
  }
}
