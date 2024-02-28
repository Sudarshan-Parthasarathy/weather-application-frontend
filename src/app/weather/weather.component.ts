import { Component, OnInit } from '@angular/core';
import { Weather } from '../model/weather';
import { WeatherService } from '../service/weather-service.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponentComponent {

  public processInput() {
    // Get the input element by its id
    console.log("hello")
    let inputElement = document.getElementById("place") as HTMLInputElement;

    // Get the value entered in the input box
    let inputValue = inputElement.value;
    this.inputValue=inputValue;
    console.log(inputValue);
    this.weatherService.weather(inputValue).subscribe(data => {
      this.weathers=data;
    });
    return inputValue;
  }
  weathers: Weather[]=[];
  inputValue="";
  title="weatherapp2";
  constructor(private weatherService: WeatherService) {

  }

 
}
