import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from "@angular/common/http";
import { WeatherInfoComponent } from './weather/weather-info/weather-info.component';
import {WeatherService} from "./weather/weather.service";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    HeaderComponent,
    WeatherComponent,
    WeatherInfoComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        HttpClientModule,
        MatButtonModule
    ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
