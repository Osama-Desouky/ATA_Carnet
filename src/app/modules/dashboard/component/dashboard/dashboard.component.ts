import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','status','actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
  }

  onDetails(row){
    console.log(row);
    
  }

  data: any;
  data2: any;
  constructor() {
    this.data = {
      labels: [
        '2015',
        '2016',
        '2017',
        '2018',
        '2019',
      ],
      datasets: [
       
        {
          label: '2020',
          backgroundColor: '#CF893C',
          borderColor: '#7CB342',
          data: [28, 48, 40, 19, 86, 27, 90],
        },
      ],
    };

    this.data2 = {
      labels: ['Ryadh','Dammam','Jeddah' ,'D'],
      datasets: [
          {
              data: [300, 50, 100 , 180],
              backgroundColor: [
                  "#C97921",
                  "#8F8A42",
                  "#740000",
                  '#ADA684'
              ],
              hoverBackgroundColor: [
                "#C97921",
                "#8F8A42",
                "#740000",
                '#ADA684'
              ]
          }]    
      };

  }

  years: Food[] = [
    {value: '1', viewValue: '2020'},
    {value: '2', viewValue: '2021'},
    {value: '3', viewValue: '2022'}
  ];

  // carousel

  customOptions: OwlOptions = {
    margin: 30,
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    nav: true,
    autoWidth:true,
    // items:4,
    navSpeed: 700,
    navText: ["<img src='../../../../../assets/images/prev.svg'>","<img src='../../../../../assets/images/next.svg'>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
  }
}

export interface Food {
  value: string;
  viewValue: string;
}

 



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  status? : string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' , status:'yes'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',status:'yes'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' ,status:'yes'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' ,status:'yes'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' ,status:'yes'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];
