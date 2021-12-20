import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Forecast} from "../models/forecast";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  dayTimeData: any;
  date: string = '';

  constructor(public dialogRef: MatDialogRef<ModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {forecast: Forecast, dayTime: string}) { }

  ngOnInit(): void {
    this.date = formatDate(this.data.forecast.date, 'dd.MM.yyyy', 'en');
    if (this.data.dayTime === 'Day') {
      this.dayTimeData = this.data.forecast.day;
    } else {
      this.dayTimeData = this.data.forecast.night;
    }
  }

  close() {
    this.dialogRef.close();
  }

}
