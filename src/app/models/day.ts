import {Wind} from "./wind";
import {DayPlace} from "./day_place";

export interface Day {
  phenomenon: string;
  tempmin:    string;
  tempmax:    string;
  text:       string;
  place?:     DayPlace[];
  wind?:      Wind[];
  sea?:       string;
  peipsi?:    string;
}
