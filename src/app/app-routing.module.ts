import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponentComponent } from './weather/weather.component';
import { HomeComponent } from './home/home.component';
import { ForecastComponentComponent } from './forecast/forecast.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { AirpollutionComponentComponent } from './airpollution/airpollution.component';

const routes: Routes = [
  //{path:'home',component:HomeComponent},
  { path: 'weather', component: WeatherComponentComponent },
  {path:'',component:HomeComponent},
  {path:'forecast',component:ForecastComponentComponent},
  {path:'airpollution',component:AirpollutionComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
