import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  source:string = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';
  constructor(private http:HttpClient ) { }

  getSampleData():Observable<any> {
    return this.http.get(this.source)
  }
}
