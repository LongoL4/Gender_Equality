import { HttpClient } from '@angular/common/http';
import { AfterViewInit } from '@angular/core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartType, GoogleChartComponent } from 'angular-google-charts';
import { Observable } from 'rxjs';
import { GeoFeatureCollection } from '../models/geojson.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'googlechart';
  type = ChartType.GeoChart;
  data = [[
    "Bosnia",
    "91,3"]];
  geoJsonObject : Object[];
  obsGeoData: Observable<Object[]>;
  columnNames = ['Name', 'Percentage'];
  options = {
  };
  width = 500;
  height = 300;
  

  constructor(private http : HttpClient) {}

  prepareData = (data: Object[]) => {
    this.geoJsonObject = data
    console.log( this.geoJsonObject );
    this.data = [];
    let i =0;
    for (const casella of this.geoJsonObject['result']) {
      i++;
      if(i > 190) break;
      this.data.push(
        [casella['economy'], casella['WBL_INDEX']]
      )
    }

    console.log(data);
  }

  ngOnInit() {

    this.obsGeoData = this.http.get<Object[]>("https://5000-longol4-genderequality-e528f2afj7b.ws-eu34.gitpod.io/economy");
    this.obsGeoData.subscribe(this.prepareData);
  }


  
  
}
