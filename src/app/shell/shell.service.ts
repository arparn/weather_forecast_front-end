import { Injectable } from '@angular/core';
import {Route, Routes} from "@angular/router";
import {ShellComponent} from "./shell.component";

@Injectable({
  providedIn: 'root'
})
export class ShellService {

  constructor() { }

  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: ShellComponent,
      children: routes
    };
  }
}
