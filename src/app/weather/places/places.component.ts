import {Component, Input, OnInit} from '@angular/core';
import {Forecast} from "../../models/forecast";
import {DayPlace} from "../../models/day_place";
import {NightPlace} from "../../models/night_place";

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  @Input() forecast: Forecast;
  dayDataSource: DayPlace[] = [];
  nightDataSource: NightPlace[] = [];
  dayDisplayedColumns: string[] = ['name', 'tempmax', 'phenomenon'];
  nightDisplayedColumns: string[] = ['name', 'tempmin', 'phenomenon'];

  constructor() {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void{
    this.dayDataSource = this.forecast.day.place!;
    this.nightDataSource = this.forecast.night.place!;
  }

}
