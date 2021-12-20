import {Component, Input, OnInit} from '@angular/core';
import {Forecast} from "../../models/forecast";

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css']
})
export class WeatherInfoComponent implements OnInit {

  @Input() forecast: Forecast;

  constructor() {
  }

  ngOnInit(): void {}
}
