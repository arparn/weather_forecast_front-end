import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {WeatherService} from "../../weather/weather.service";
import {formatDate} from "@angular/common";

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
    this.getTodayMinAndMaxTemp();
  }

  getTodayMinAndMaxTemp(): void{
    this.weatherService.getMaxAndMinTemp(0).subscribe((response) => {
      this.temp_max = response.tempmax;
      this.temp_min = response.tempmin;
      if (formatDate(response.date, 'dd.MM.yyyy', 'en') === this.today_date) {
        this.today = true;
      }
    });
  }

  get title(): string {
    return this.titleService.getTitle();
  }

}
