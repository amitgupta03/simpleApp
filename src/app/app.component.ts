import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  sampleData: any= [];

  constructor(private appService : AppService) {

  }
  ngOnInit(): void {
     this.appService.getSampleData().subscribe((data: any[]) => {
      this.sampleData = data.entries;
    }) ;
  }
  title = 'simpleApp';

}
