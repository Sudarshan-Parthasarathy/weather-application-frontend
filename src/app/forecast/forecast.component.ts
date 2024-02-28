import { Component, OnInit } from '@angular/core';
import { Forecast } from '../model/forecast';
import { ForecastService } from '../service/forecast-service.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponentComponent {

  public processInput() {
    // Get the input element by its id
    console.log("hello")
    let inputElement = document.getElementById("place") as HTMLInputElement;

    // Get the value entered in the input box
    let inputValue = inputElement.value;
    console.log(inputValue);
    this.forecastService.forecast(inputValue).subscribe(data => {
      //JSON.stringify(data)
      this.forecasts=data;
      JSON.stringify(this.forecasts)
      console.log(JSON.stringify(this.forecasts))
      
    });
    return inputValue;
  }
  forecasts: Forecast[]=[];
  inputValue="";
  constructor(private forecastService: ForecastService) {

  }

 
}
