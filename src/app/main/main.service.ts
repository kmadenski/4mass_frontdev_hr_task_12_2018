import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";

interface Item {
  id: string;
}

@Injectable({
  providedIn: "root"
})
export class MainService {
  public list: any[];
  private url: string = "https://swapi.co/api/planets/";
  constructor(private _httpClient: HttpClient) {}

  fetchPlanets(): Observable<any> {
    return this._httpClient.get(this.url);
  }
}
