import {Component, Input, OnInit} from '@angular/core';
import {Forecast} from "../../models/forecast";
import {MatDialog} from "@angular/material/dialog";
import {ModalComponent} from "../../modal/modal.component";

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css']
})
export class WeatherInfoComponent implements OnInit {

  @Input() forecast: Forecast;

  constructor(private matDialog: MatDialog,) {
  }

  ngOnInit(): void {}

  open(dayTime: string) {
    let dialogRef = this.matDialog.open(ModalComponent, {
      height: '70%',
      width: '50%',
      data: {forecast: this.forecast, dayTime: dayTime}
    });
    dialogRef.afterClosed().subscribe();
  }
}
