import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PatientdetailsService } from '../../patientdetails.service';
import { Patient } from '../../_interface/patient.model';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';



@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.component.html',
  styleUrls: ['./patientlist.component.css']
})

export class PatientlistComponent implements OnInit {

  public displayedColumns = [ 'firstName', 'lastName', 'birthDate', 'address', 'gender', 'telecom'];
  public patientList = new MatTableDataSource<Patient>();

  
  constructor(private patientService: PatientdetailsService) { }

  ngOnInit() {
    this.getAllpatient();
  }

  public getAllpatient = () => {
    this.patientService.getPatient()
      .subscribe(res => {

        //console.log(res.entry);

        let data: Array<Patient> = [];

        res.entry.forEach((item: any) => {
          // name
          let jsonName = item.resource.name;
          let name = "";
          let last = "";
          if (jsonName)
            Object.keys(jsonName[0]).forEach((keys: string) => {
              if (keys === 'prefix')
                name = jsonName[0].prefix;

              if (keys === 'given') {
                name = name + ' ' + jsonName[0].given.join(" ");
              }

              if (keys === 'family')
                last = jsonName[0].family;
            })

          // address
          let address = "";
          Object.keys(item.resource).forEach((keys: string) => {
            if (keys === "address") {
              let line = item.resource.address[0].line.join(', ');
              let city = item.resource.address[0].city;
              let state = item.resource.address[0].state;
              let country = item.resource.address[0].country;

              address = line + ' , ' + city + ' , ' + state + ' , ' + country
            }
          })

          // telecom
          let telecom = "";
          Object.keys(item.resource).forEach((keys: string) => {
            if (keys === "telecom") {
              telecom = item.resource.telecom[0].value;
            }
          })

          let child: Patient = { 
            // id: item.resource.id,
            firstName: name, 
            lastName: last, 
            birthDate: item.resource.birthDate, 
            address: address, 
            gender: item.resource.gender, 
            telecom: telecom
           };
          data.push(child);
        })

        this.patientList.data = data;
       
      })
  }
  // setupFilter(column: string) {
  //   this.patientList.filterPredicate = (d: any, filter: string) => {
  //     const textToSearch = d[column] && d[column].toLowerCase() || '';
  //     return textToSearch.indexOf(filter) !== -1;
  //   };
  // }
  firstnameFilter(filtervalue: string) {
    this.patientList.filter = filtervalue.trim();
  }
  // lastnameFilter(filtervalue: string) {
  //   this.patientList.filter = filtervalue.trim();
  // }

  

 
}

