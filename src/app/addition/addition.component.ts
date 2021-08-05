import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import { MaterialModule } from '../shared/material/material.module';
import { MatFormField } from '@angular/material/form-field';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent {

  name = 'Angular';  
    
  productForm: FormGroup;  
     
  constructor(private fb:FormBuilder, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {  
     
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg')
    );
    
    this.productForm = this.fb.group({  
      name: '',  
      quantities: this.fb.array([]) ,

    });
      
  }
  
  myControl = new FormControl();
  options: string[] = ['SQL', 'Java', 'Python', 'Linux', 'JavaScript', 'Amazon Web Services', 'C++', 'C', 'C#', '.NET', 'Oracle', 'HTML', 'Scrum', 'Git', 'CSS',
                        'Machine learning', 'Azure', 'Unix', 'SQL Server', 'Docker', 'Quantum Computing', 'Data Analytics'];
    
  quantities() : FormArray {  
    return this.productForm.get("quantities") as FormArray  
  }  
     
  newQuantity(): FormGroup {  
    return this.fb.group({  
      naam: '',  
      city: '',
      contact: ''              
    })  
  }  
     
  addQuantity() {  
    this.quantities().push(this.newQuantity());  
  }  
     
  removeQuantity(i:number) {  
    this.quantities().removeAt(i);  
  }  
     
  onSubmit() {  
    console.log(this.productForm.value);  
  }  

}
