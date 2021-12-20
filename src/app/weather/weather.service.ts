import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Forecasts} from "../models/forecasts";
import {Forecast} from "../models/forecast";


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(): Observable<Forecasts> {
    const url = '/api/weather';
    return this.http.get<Forecasts>(url);
  }

  getMaxAndMinTemp(forecast: Forecast): any {

    let temp_max: string = '';
    let temp_min: string = '';
    if (forecast.day.tempmax >= forecast.night.tempmax) {
      temp_max = forecast.day.tempmax;
    } else {
      temp_max = forecast.night.tempmax;
    }
    if (forecast.night.tempmin <= forecast.day.tempmin) {
      temp_min = forecast.night.tempmin;
    } else {
      temp_min = forecast.day.tempmin;
    }

    let temp = {
      tempmax: temp_max,
      tempmin: temp_min
    };

    return temp;
  }
}
