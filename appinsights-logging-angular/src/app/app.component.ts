import { Component, ErrorHandler } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppInsightsService } from './services/appinsights.service';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appinsights-logging-angular';
  weatherInfo: any[] = [];
  constructor(private appInsights: AppInsightsService, private http: HttpClient) { }

  ngOnInit(){
    this.appInsights.logTrace("1st Front End Oninit");
    this.getAllWeatherForecastDetails().subscribe(results => {
      this.weatherInfo = results;
    });
  }

  getAllWeatherForecastDetails(): Observable<any> {
    debugger
    this.appInsights.logTrace('2nd Front End Calling Weather API');
    return this.http.get('http://localhost:5003/WeatherForecast', {})
      .pipe( tap({
        next: (result) => {
          console.log(result);
        },
        error: () => console.log("error")
      }));
  }
}

