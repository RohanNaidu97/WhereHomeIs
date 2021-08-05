import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material/material.module';
import { ConvertComponent } from './convert/convert.component';
import { RouterModule } from '@angular/router';
import { ConditionComponent } from './condition/condition.component';
import { AdditionComponent } from './addition/addition.component';
import { TableComponent } from './table/table.component';
import {CdkTableModule} from '@angular/cdk/table';
 
@NgModule({
  declarations: [
    AppComponent,
    ConvertComponent,
    ConditionComponent,
    AdditionComponent,
    TableComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule, 
    FormsModule,
    RouterModule,
    CdkTableModule,
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }