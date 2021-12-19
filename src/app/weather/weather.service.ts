import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Forecasts} from "../models/forecasts";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(): Observable<Forecasts> {
    const url = '/api/weather'
    return this.http.get<Forecasts>(url);
  }
}
