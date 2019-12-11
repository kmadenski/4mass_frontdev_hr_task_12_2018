import { Injectable } from "@angular/core";
import { Planet, dummyData, Dummy } from "../dummy";
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
  getPlanets(): Observable<Dummy> {
    return this._httpClient.get<Dummy>("https://swapi.co/api/planets/");
  }

  searchPlanet(name): Observable<Dummy> {
    return this._httpClient.get<Dummy>(
      `https://swapi.co/api/planets/?search=${name}`
    );
  }

  searchPlanetByPage(url: string): Observable<Dummy> {
    return this._httpClient.get<Dummy>(url);
  }
}
