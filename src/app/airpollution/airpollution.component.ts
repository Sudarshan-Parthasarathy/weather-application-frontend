import { Component, OnInit } from '@angular/core';
import { Airpollution } from '../model/airpollution';
import { AirpollutionService } from '../service/airpollution-service.service';

@Component({
  selector: 'app-airpollution',
  templateUrl: './airpollution.component.html',
  styleUrls: ['./airpollution.component.css']
})
export class AirpollutionComponentComponent {

  public processInput() {
    // Get the input element by its id
    console.log("hello")
    let inputElement = document.getElementById("place") as HTMLInputElement;

    // Get the value entered in the input box
    let inputValue = inputElement.value;
    this.inputValue=inputValue;
    console.log(inputValue);
    this.airpollutionService.airpollution(inputValue).subscribe(data => {
      this.airpollutions=data;
    });
    return inputValue;
  }
  airpollutions: Airpollution[]=[];
  inputValue="";
  title="weatherapp2";
  constructor(private airpollutionService: AirpollutionService) {

  }

 
}
