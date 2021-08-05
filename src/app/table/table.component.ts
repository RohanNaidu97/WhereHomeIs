import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';
import {CdkTableModule} from '@angular/cdk/table';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';

export interface PeriodicElement {
  name: string;
  position: number;
  city: string;

  startDate: any;
  
}



export interface InnerElement {
  assigned: number;
  notStarted: number;
  completed: number;
  pending: number;
}




const NESTED_DATA: InnerElement[] = [
  {assigned: 25, notStarted: 10, completed: 2, pending: 8},
  {assigned: 25, notStarted: 15, completed: 4, pending: 6},
  {assigned: 35, notStarted: 30, completed: 5, pending: 0},
  {assigned: 40, notStarted: 20, completed: 6, pending: 14},
  {assigned: 18, notStarted: 12, completed: 5, pending: 1}
];


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})


export class TableComponent implements OnInit {

  bookStaffEmployeeDate(){

    var selectedDate = moment(this.staff_book_date);

    this.weekStart = selectedDate.clone().startOf('week').format('MMM Do');
    this.weekEnd = selectedDate.clone().endOf('week').format('MMM Do');

    console.log("This is the START DATE:", this.weekStart);
    console.log("This is the START DATE:", this.weekEnd);
  }

  staff_book_date:any;
  
  pickedDate!: FormGroup;
  result:any;
  weekStart!: string;
  weekEnd!: string; 
  
  displayedColumns: string[] = ['position', 'name', 'city', 'startDate'];
  dataSource = ELEMENT_DATA;

  nestedColumns: string[] = ['assigned', 'notStarted', 'completed', 'pending'];
  nestedSource = NESTED_DATA;

  constructor() { }

  ngOnInit(): void {
    this.pickedDate = new FormGroup({
      day: new FormControl() 
    })
  }


  calculateWeek(data: any)
  {
    console.log(data)
    this.result = data.day;
    this.pickedDate.controls.day.setValue(this.result);
  }


}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', city: 'H', startDate: NESTED_DATA },
  {position: 2, name: 'Helium',  city: 'He', startDate: "this.weekStart"},
  {position: 3, name: 'Lithium', city: 'Li', startDate: "this.weekStart"},
  {position: 4, name: 'Beryllium', city: 'Be', startDate: "this.weekStart"},
  {position: 5, name: 'Boron',  city: 'B', startDate: "this.weekStart"},
  
];


/*
{position: 6, name: 'Carbon', city: 'C', startDate: "this.weekStart" },
  {position: 7, name: 'Nitrogen', city: 'N', startDate: "this.weekStart"},
  {position: 8, name: 'Oxygen', city: 'O', startDate: "this.weekStart"},
  {position: 9, name: 'Fluorine', city: 'F', startDate: "this.weekStart"},
  {position: 10, name: 'Neon', city: 'Ne', startDate: "this.weekStart"},

*/