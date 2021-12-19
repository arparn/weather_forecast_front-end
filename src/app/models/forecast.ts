import {Night} from "./night";
import {Day} from "./day";

export interface Forecast {
  night: Night;
  day:   Day;
  _date: Date;
}
