import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PatientModule } from '../patient/patient.module';
import { PatientlistComponent } from '../patient/patientlist/patientlist.component';

const routes: Routes = [
 { path: 'patientlist', component: PatientlistComponent},
  { path: 'patientlist', loadChildren: () => import ('./../patient/patient.module').then(m => m.PatientModule) }, 
  { path: '', redirectTo: '/patientlist', pathMatch: 'full' }
 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
