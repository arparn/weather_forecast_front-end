import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {WeatherService} from "../../weather/weather.service";
import {formatDate} from "@angular/common";
import {Forecast} from "../../models/forecast";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  today_date = formatDate(new Date(), 'dd.MM.yyyy', 'en');
  today: boolean = false;
  temp_max: string;
  temp_min: string;

  constructor(private titleService: Title,
              private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather(): void{
    this.weatherService.getWeather().pipe().subscribe((response) => {
      if (formatDate(response.forecast[0].date, 'dd.MM.yyyy', 'en') === this.today_date) {
        this.today = true;
      }
      this.getMaxAndMinTemp(response.forecast[0]);
    })
  }

  getMaxAndMinTemp(forecast: Forecast): void{
    let result = this.weatherService.getMaxAndMinTemp(forecast);
    this.temp_max = result.tempmax;
    this.temp_min = result.tempmin;
  }

  get title(): string {
    return this.titleService.getTitle();
  }

}
