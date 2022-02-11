import { HttpClient } from '@angular/common/http';
import { AfterViewInit } from '@angular/core';
import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { ChartType, GoogleChartComponent } from 'angular-google-charts';  
import { Observable } from 'rxjs';
import {  GeoFeatureCollection } from '../models/geojson.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'googlechart';  
  type = ChartType.GeoChart;  
  data = [  
     ['IT', 5.0],  
     ['FR', 36.8],  
     ['UK', 42.8],   
  ];  
  columnNames = ['Name', 'Percentage']; 
  options = {      
  };  
  width = 500;  
  height = 300;  
  constructor(){}  
  ngOnInit() {} 
}
