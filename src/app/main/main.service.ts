import { Injectable } from '@angular/core';
import { Planet } from '../dummy';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

// interface Item {
//   id: string;
// }
const planetsURL = "https://swapi.co/api/planets";

@Injectable({
  providedIn: 'root'
})
export class MainService {
  // public list: Planet[];
  constructor(private _httpClient: HttpClient) {
    // this.list = dummyData.results;
  }
  findPlanets(page = 1, filter = ''): Observable<Planet[]> {
    return this._httpClient.get(planetsURL, {
      params: new HttpParams()
        .set('page', page.toString())
        .set('search', filter)
    }).pipe(
      map(res => res as Planet[])
    );
  }
}




