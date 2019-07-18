import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DogsService {
  private dogsList: any[];
  private imagesList: string[];
  private imageListUpdated = new Subject<string[]>();
  private dogsListUpdated = new Subject();
  constructor(private http: HttpClient) {}

  getDogsUpdateListener() {
    return this.dogsListUpdated.asObservable();
  }

  getImageUpdateListener() {
    return this.imageListUpdated.asObservable();
  }

  getAllDogs() {
    this.http
      .get<{ message: any; status: boolean }>(
        'https://dog.ceo/api/breeds/list/all'
      )
      .subscribe(dogData => {
        this.dogsList = Object.entries(dogData.message);
        this.dogsListUpdated.next(this.dogsList);
      });
  }

  getImagesForBreed(breed: string) {
    this.http
      .get<{ message: any; status: boolean }>(
        'https://dog.ceo/api/breed/' + breed + '/images'
      )
      .subscribe(
        dogData => {
          this.imagesList = dogData.message;
          this.imageListUpdated.next(this.imagesList);
        },
        err => {
          console.error('ERROR(s): ' + err.message);
        }
      );
  }

  getImagesForSubBreed(breed: string, subBreed: string) {
    this.http
      .get<{ message: any; status: boolean }>(
        'https://dog.ceo/api/breed/' + breed + '/' + subBreed + '/images'
      )
      .subscribe(
        dogData => {
          this.imagesList = dogData.message;
          this.imageListUpdated.next(this.imagesList);
        },
        err => {
          console.error('ERROR(s): ' + err.message);
        }
      );
  }
}
