import {DayPlace} from "./day_place";
import {Wind} from "./wind";

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
