import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
URI:string;
apiKey='728949df343beaac833a4faa447a553b';
  constructor( private httpClient:HttpClient) { 
    this.URI=  `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`
   
  }


  getWeather(city:string ,country :string){

   return this.httpClient.get(`${this.URI}${city},${country}`)
  }
}
