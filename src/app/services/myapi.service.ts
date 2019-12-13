import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Planets} from '../planets';

@Injectable()

export class myapiService {


    constructor(private http: HttpClient) { }

    getPlanets(): Observable<any> {
        return this.http.get('https://swapi.co/api/planets/');
    }

}