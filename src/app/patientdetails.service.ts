import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Patient } from './_interface/patient.model';

@Injectable({
  providedIn: 'root',
})
export class PatientdetailsService {

  private serviceUrl = 'https://try.smilecdr.com/baseR4/Patient/';

  constructor(private http: HttpClient) {}

  getPatient(): Observable<any> {
    return this.http.get(this.serviceUrl);
      
  }
}

