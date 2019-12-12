import { Injectable } from "@angular/core";
import { Planet, Response } from "../model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

interface Item {
  id: string;
}

@Injectable({
  providedIn: "root"
})
export class MainService {
  // public list: Planet[];

  constructor(private _httpClient: HttpClient) {
    // this.list = dummyData.results;
  }
  getPlanets(): Observable<Response> {
    return this._httpClient.get<Response>("https://swapi.co/api/planets/");
  }

  searchPlanet(name): Observable<Response> {
    return this._httpClient.get<Response>(
      `https://swapi.co/api/planets/?search=${name}`
    );
  }

  searchPlanetByPage(url: string): Observable<Response> {
    return this._httpClient.get<Response>(url);
  }
}
