import { Component, OnInit } from '@angular/core';
import {WeatherService} from "./weather.service";
import {Forecast} from "../models/forecast";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  forecasts: Forecast[] = [];

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather(): void{
    this.weatherService.getWeather().subscribe((response) => {
      this.forecasts = response.forecast;
      console.log(this.forecasts);
    });
  }
}
