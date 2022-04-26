import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { PatientlistComponent } from './patientlist/patientlist.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { Patient } from '../_interface/patient.model'



@NgModule({
  declarations: [
    PatientlistComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppMaterialModule
  ]
})
export class PatientModule { }
