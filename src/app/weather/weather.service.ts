import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Forecasts} from "../models/forecasts";
import {MinMaxTemp} from "../models/min_max_temp";


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(): Observable<Forecasts> {
    return this.http.get<Forecasts>('/api/weather');
  }

  getMaxAndMinTemp(id: number): Observable<MinMaxTemp> {
    return this.http.get<MinMaxTemp>(`api/temperature?id=${id}`);
  }
}
