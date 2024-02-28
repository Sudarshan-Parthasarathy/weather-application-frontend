import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WeatherComponentComponent } from './weather/weather.component';
import { WeatherService } from './service/weather-service.service';
import { ForecastService } from './service/forecast-service.service';
import { ForecastComponentComponent } from './forecast/forecast.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { AirpollutionComponentComponent } from './airpollution/airpollution.component';
import { AirpollutionService } from './service/airpollution-service.service';
@NgModule({
  declarations: [
    AppComponent,
    WeatherComponentComponent,
    ForecastComponentComponent,
    MainHomeComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    AirpollutionComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WeatherService,ForecastService,AirpollutionService],
  bootstrap: [AppComponent],
  exports:[AppRoutingModule,WeatherComponentComponent,ForecastComponentComponent]
})

export class AppModule {  

}

