import {Component, OnInit} from '@angular/core';
import {Moment} from "moment";
import * as moment from "moment";
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  now: string;
  light: string;
  date: string;
  week: string;
  weather: {
    description: string;
    temperature: string;
    iconString: string;
  };
  momentObject: Moment;
  // @ts-ignore
  updateTimeTask: NodeJS.Timeout;
  // @ts-ignore
  updateWeatherTask:NodeJS.Timeput;
   weatherService: WeatherService
  constructor(private weatherServiceVar: WeatherService) {
    this.weatherService = weatherServiceVar;
    this.weather = {
      iconString:'',
      description:'',
      temperature:''
    }

    this.UpdateTime();
    this.UpdateSimpleWeather();

  }

  private UpdateTime() {
    if (this.updateTimeTask === undefined) {
      this.updateTimeTask = setInterval(() => {

        this.momentObject = moment();
        this.now = this.momentObject.toString().split(' ')[4];
        const hours = this.momentObject.hours();
        const minutes = this.momentObject.minutes();
        if (hours === 0 && minutes === 0) {
          this.UpdateDate()
        }
        this.UpdateDate();

        this.light = (hours >= 7 && hours <= 21) ? 'day' : 'night';
      }, 1000);
    }
  }
  private UpdateSimpleWeather() {
      this.weatherService.getCurrentWeather('Aarhus').subscribe(res => {
        console.log(res);
        // @ts-ignore
        this.weather.iconString = 'http://openweathermap.org/img/wn/'+res.weather[0].icon+'@2x.png';
        // @ts-ignore

        this.weather.temperature = Math.round(res.main.temp)+'°C';
        // @ts-ignore

        this.weather.description = res.weather[0].description;
      });
  }
  private UpdateDate() {
    this.week = 'Week ' + this.momentObject.week();
    this.date = this.momentObject.format('Do MMMM YYYY');
  }

  ngOnInit(): void {
  }

}
