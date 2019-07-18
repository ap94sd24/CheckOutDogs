import { Component, OnInit, OnDestroy } from '@angular/core';
import { DogsService } from '../dogs.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-dogs-listing',
  templateUrl: './dogs-listing.component.html',
  styleUrls: ['./dogs-listing.component.css']
})
export class DogsListingComponent implements OnInit, OnDestroy {
  dogData: any[] = [];
  dogSearchData: string[] = [];
  breed: string;
  isSearch = false;
  private dogsSub: Subscription;
  constructor(
    public dogsService: DogsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      // show search results
      if (paramMap.has('query')) {
        this.dogSearchData = [];
        this.isSearch = true;
        // check localStorage for user_data

        this.breed = paramMap.get('query');
        this.dogData = JSON.parse(localStorage.getItem('dog_data'));
        const breedArr = this.breed.split(' ');

        // find sub-breed
        if (breedArr.length > 1) {
          this.dogData = this.dogData.filter(item => {
            if (item[0] === breedArr[1]) {
              return item;
            }
          });
          if (this.dogData.length === 0) {
            return (this.dogData = []);
          }
          const found = this.dogData[0][1].find(x => x === breedArr[0]);
          if (found === undefined) {
            return (this.dogData = []);
          }
          this.dogSearchData.push(found + ' ' + this.dogData[0][0]);
          this.dogData = this.dogSearchData;
        } else {   // find by breed
          this.dogData = this.dogData.filter(item => {
            if (item[0] === breedArr[0]) {
              return item;
            }
          });
          if (this.dogData.length === 0) {
            return (this.dogData = []);
          }
          this.dogSearchData.push(this.dogData[0][0]);
          this.dogData[0][1].forEach(item =>
            this.dogSearchData.push(item + ' ' + this.dogData[0][0])
          );
          this.dogData = this.dogSearchData;
        }
      } else {
        // initial load
        this.isSearch = false;
        this.dogsService.getAllDogs();
        this.dogsSub = this.dogsService
          .getDogsUpdateListener()
          .subscribe((data: any[]) => {
            this.dogData = [...data];
            localStorage.setItem('dog_data', JSON.stringify(this.dogData));
          });
      }
    });
  }

  /**
   * Register user button clicks on filtered results and redirect to images view
   * @param query - search query string
   */
  onClick(query: string) {
    const checkSubBreed = query.split(' ');
    if (checkSubBreed.length > 1) { // sub-breed
      this.router.navigateByUrl('/' + checkSubBreed[1] + '/' + checkSubBreed[0] + '/images');
    } else {
      this.router.navigateByUrl('/' + query + '/images');
    }
  }

  /**
   * Garbage collection - unsubscribe from dogs subscription
   */
  ngOnDestroy(): void {
    if (this.dogsSub !== undefined) {
      this.dogsSub.unsubscribe();
    }
  }
}
