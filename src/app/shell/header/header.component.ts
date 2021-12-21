import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  today_date = formatDate(new Date(), 'dd.MM.yyyy', 'en');

  constructor(private titleService: Title) { }

  ngOnInit(): void {}

  get title(): string {
    return this.titleService.getTitle();
  }

}
