import { Component, OnInit } from '@angular/core';
import {WeatherService} from './services/weather.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  weathe;
  constructor(private weather:WeatherService){

  }
  ngOnInit(){
  

  }

  getWeather(cityName:string, countryCode:string){
    this.weather.getWeather(cityName,countryCode)
    .subscribe(res=>{
      this.weathe=res,
      err=>{console.log(err)};
  
    });


  }

  submitLocation(cityName, countryCode){
    if (cityName.value && countryCode.value){
       this.getWeather(cityName.value,countryCode.value)
       cityName.value='';
       countryCode.value='';

    }
    else{
      alert('Ingrese datos validos');
    }
    cityName.focus;
    return false; 

  }
  
}
