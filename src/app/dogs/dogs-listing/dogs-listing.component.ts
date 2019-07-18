import { Component, OnInit, OnDestroy } from '@angular/core';
import { DogsService } from '../dogs.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-dogs-listing',
  templateUrl: './dogs-listing.component.html',
  styleUrls: ['./dogs-listing.component.css']
})
export class DogsListingComponent implements OnInit, OnDestroy {
  dogData: any[] = [];
  private dogsSub: Subscription;
  constructor(public dogsService: DogsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
        // show search results
        if (paramMap.has('search')) {
          // not cached
          
        } else { // initial load
          this.dogsService.getAllDogs();
          this.dogsSub = this.dogsService.getDogsUpdateListener()
          .subscribe(
            (data: any[]) => {
               this.dogData = [...data];
            }
          );
        }
    });
  }

  ngOnDestroy(): void {
     this.dogsSub.unsubscribe();
  }

}
