import { Component, OnInit } from '@angular/core';
import {WeatherService} from "./weather.service";
import {Forecast} from "../models/forecast";
import {formatDate} from "@angular/common";
import {interval, mergeMap} from "rxjs";
import {Forecasts} from "../models/forecasts";


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  forecasts: Forecast[] = [];
  current_forecast: Forecast;
  current_date: string = '';
  current_day: number = 0;
  max_day: number;
  temp_max: string;
  temp_min: string;
  isOk: boolean = true;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeather();
    interval(2 * 60 * 1000)
      .pipe(
        mergeMap(() => this.weatherService.getWeather())
      )
      .subscribe(response => {
        this.updateForecasts(response);
      });
  }

  getWeather(): void{
    this.weatherService.getWeather().subscribe((response) => {
      this.updateForecasts(response);
    });
  }

  updateForecasts(response: Forecasts): void{
    if (response.forecast.length > 0) {
      this.isOk = true;
      for (let forecast of response.forecast) {
        forecast.date = formatDate(forecast.date, 'dd.MM.yyyy', 'en');
        if (forecast.date == formatDate(new Date(), 'dd.MM.yyyy', 'en')) {
          forecast.date = 'Today ' + forecast.date;
        }
      }
      this.forecasts = response.forecast;
      this.current_forecast = response.forecast[this.current_day];
      this.max_day = response.forecast.length;
      this.updateDateMaxAndMinTemp();
    } else {
      this.isOk = false;
    }
  }

  updateDateMaxAndMinTemp(): void{
    if (this.current_forecast != null) {
      if (parseInt(this.current_forecast.day.tempmax) >= parseInt(this.current_forecast.night.tempmax)) {
        this.temp_max = this.current_forecast.day.tempmax;
      } else {
        this.temp_max = this.current_forecast.night.tempmax;
      }
      if (parseInt(this.current_forecast.night.tempmin) <= parseInt(this.current_forecast.day.tempmin)) {
        this.temp_min = this.current_forecast.night.tempmin;
      } else {
        this.temp_min = this.current_forecast.day.tempmin;
      }
    }
  }

  backward(): void {
    if (this.current_day - 1 >= 0) {
      this.current_day -= 1;
      this.current_forecast = this.forecasts[this.current_day];
      this.updateDateMaxAndMinTemp();
    }
  }

  forward(): void {
    if (this.current_day + 1 <= this.max_day - 1) {
      this.current_day += 1;
      this.current_forecast = this.forecasts[this.current_day];
      this.updateDateMaxAndMinTemp();
    }
  }

  select(): void {
    this.current_day = this.forecasts.indexOf(this.current_forecast);
    this.updateDateMaxAndMinTemp();
  }
}
