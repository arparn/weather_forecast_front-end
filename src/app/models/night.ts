import {NightPlace} from "./night_place";
import {Wind} from "./wind";

export interface Night {
  phenomenon: string;
  tempmin:    string;
  tempmax:    string;
  text:       string;
  place?:     NightPlace[];
  wind?:      Wind[];
  sea?:       string;
  peipsi?:    string;
}
