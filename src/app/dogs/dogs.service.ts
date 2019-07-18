import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DogsService {

  private dogsList: any[];
  private dogsListUpdated = new Subject();
  constructor(private http: HttpClient) { }

  getDogsUpdateListener() {
    return this.dogsListUpdated.asObservable();
  }

  getAllDogs() {
    this.http.get<{ message: any, status: boolean }>('https://dog.ceo/api/breeds/list/all')
    .subscribe(dogData => {
      this.dogsList = Object.entries(dogData.message);
      this.dogsListUpdated.next(this.dogsList);
    }, (err) => {
      console.error('ERROR(s): ' + err.message);
    });
  }
}
