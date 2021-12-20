import { Component, OnInit } from '@angular/core';
import {WeatherService} from "./weather.service";
import {Forecast} from "../models/forecast";

import {formatDate} from "@angular/common";


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
  temp_max: string = '';
  temp_min: string = '';

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeather();
    this.updateDateMaxAndMinTemp();
  }

  getWeather(): void{
    this.weatherService.getWeather().subscribe((response) => {
      this.forecasts = response.forecast;
      this.max_day = response.forecast.length;
      this.current_forecast = response.forecast[this.current_day];
      console.log(this.forecasts);
    });
  }

  updateDateMaxAndMinTemp(): void{
    this.weatherService.getMaxAndMinTemp(this.current_day).subscribe((response) => {
      this.temp_max = response.tempmax;
      this.temp_min = response.tempmin;
      this.current_date = formatDate(response.date, 'dd.MM.yy', 'en');
    });
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
}
