import { Injectable } from '@angular/core';
import { Planet, Planets, dummyData } from '../dummy';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Item{
  id:string;
}

@Injectable({
  providedIn: 'root'
})

export class MainService {

  private swapiUrl: string = 'https://cors-anywhere.herokuapp.com/https://swapi.co/api/planets';
  /*
    Podany endpoint w zadaniu nie posiada odpowienich headerów CORS;
    W związku z tym użyłem proxy.
  */

  constructor(private _httpClient: HttpClient) {}

  fetchPlanets():Observable<Planets> {
    return this._httpClient.get<Planets>(this.swapiUrl);
  }

}
