import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { DogsService } from './../dogs/dogs.service';
@Component({
  selector: 'app-dogs-images',
  templateUrl: './dogs-images.component.html',
  styleUrls: ['./dogs-images.component.css']
})
export class DogsImagesComponent implements OnInit, OnDestroy {
  isLoading = false;
  breed: string;
  subBreed: string;
  searchCache: any[] = [];
  imagesArray: string[] = [];
  copyOfImagesArray: string[] = [];
  checkFound = false;
  imagesSub: Subscription;
  constructor(public dogsService: DogsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      // check for sub-breed images
      if (paramMap.has('breed') && paramMap.has('subBreed')) {
        this.breed = paramMap.get('breed');
        this.subBreed = paramMap.get('subBreed');
        const subBreedFullName = this.subBreed + ' ' + this.breed;
        if (localStorage.getItem('search_data') !== null) {
          const cacheData = JSON.parse(localStorage.getItem('search_data'));

          cacheData.forEach(item => {
            if (item[0].includes(subBreedFullName)) {
              this.checkFound = true;
              this.imagesArray = item.slice(1);
              this.isLoading = true;
            }
          });
          if (!this.checkFound) {
            this.dogsService.getImagesForSubBreed(this.breed, this.subBreed);
            this.imagesSub = this.dogsService
              .getImageUpdateListener()
              .subscribe((data: any[]) => {
                this.imagesArray = [...data];
                this.isLoading = true;
                this.copyOfImagesArray = [...this.imagesArray];
                this.setSearchCache(
                  this.breed,
                  this.copyOfImagesArray,
                  this.subBreed
                );
              });
          }
        } else { // breed images
          this.dogsService.getImagesForSubBreed(this.breed, this.subBreed);
          this.imagesSub = this.dogsService
            .getImageUpdateListener()
            .subscribe((data: any[]) => {
              this.imagesArray = [...data];
              this.isLoading = true;
              this.copyOfImagesArray = [...this.imagesArray];
              this.setSearchCache(this.breed, this.copyOfImagesArray, this.subBreed);
            });
        }
      } else {
        this.breed = paramMap.get('breed');
        if (localStorage.getItem('search_data') !== null) {
          const cacheData = JSON.parse(localStorage.getItem('search_data'));
          cacheData.forEach(item => {
            if (item[0].includes(this.breed)) {
              this.checkFound = true;
              this.imagesArray = item.slice(1);
              this.isLoading = true;
            }
          });
          // not found, call service
          if (!this.checkFound) {
            this.dogsService.getImagesForBreed(this.breed);
            this.imagesSub = this.dogsService
              .getImageUpdateListener()
              .subscribe((data: any[]) => {
                this.imagesArray = [...data];
                this.copyOfImagesArray = [...this.imagesArray];
                this.isLoading = true;
                this.setSearchCache(this.breed, this.copyOfImagesArray);
              });
          }
        } else {
          this.dogsService.getImagesForBreed(this.breed);
          this.imagesSub = this.dogsService
            .getImageUpdateListener()
            .subscribe((data: any[]) => {
              this.imagesArray = [...data];
              this.copyOfImagesArray = [...this.imagesArray];
              this.isLoading = true;
              this.setSearchCache(this.breed, this.copyOfImagesArray);
            });
        }
      }
    });
  }

  /**
   * Caches search images data into localStorage for later access
   * @param breedName - breed name of dogs
   * @param images    - array of images
   * @param subBreedName - sub-breed of dogs
   */
  setSearchCache(breedName: string, images: string[], subBreedName?: string) {
    if (subBreedName) {
      const dogBreed = subBreedName + ' ' + breedName;
      images.splice(0, 0, dogBreed);
      if (localStorage.getItem('search_data') !== null) {
        this.searchCache = JSON.parse(localStorage.getItem('search_data'));
        this.searchCache.push(images);
      } else {
        this.searchCache.push(images);
      }
      localStorage.setItem('search_data', JSON.stringify(this.searchCache));
    } else {
      images.splice(0, 0, breedName);
      if (localStorage.getItem('search_data') !== null) {
        this.searchCache = JSON.parse(localStorage.getItem('search_data'));
        this.searchCache.push(images);
      } else {
        this.searchCache.push(images);
      }
      localStorage.setItem('search_data', JSON.stringify(this.searchCache));
    }
  }

  ngOnDestroy() {
    if (this.imagesSub !== undefined) {
      this.imagesSub.unsubscribe();
    }
  }
}
