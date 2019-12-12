import { Injectable } from '@angular/core';
import { Planet, DataModel } from '../dummy';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment"

interface Item {
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class MainService {
  public apiKey: string = "https://swapi.co/api/";

  constructor(private _httpClient: HttpClient) {
  }


  getPlanet(pageNumber: number): Observable<DataModel> {
    return this._httpClient.get<DataModel>(this.apiKey + "planets/?page=" + pageNumber);

  }

  searchPlanet(term: string, next?: string): Observable<DataModel> {
    if (next) {
      return this._httpClient.get<DataModel>(next);
    } else {
      return this._httpClient.get<DataModel>(this.apiKey + "planets/?search=" + term);
    }

  }


}
