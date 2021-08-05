import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})
export class ConvertComponent implements OnInit {

  temperatureConverter!: FormGroup;
  result:any;
    
    constructor() { }

    ngOnInit() {

        this.temperatureConverter= new FormGroup({
            celsius: new FormControl(),
            fahren: new FormControl()
        })
     }

     celToFah(data:any){

        console.log(data);
        this.result = data.celsius*9/5+32;
        this.temperatureConverter.controls.fahren.setValue(this.result);

     }

     fahToCel(data:any){

        this.result = (data.fahren-32)*5/9;
        this.temperatureConverter.controls.celsius.setValue(this.result);

     }
}
