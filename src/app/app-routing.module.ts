import { DogsImagesComponent } from './dogs-images/dogs-images.component';
import { DogsListingComponent } from './dogs/dogs-listing/dogs-listing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: DogsListingComponent},
  {path: 'search/:query', component: DogsListingComponent},
  {path: ':breed/images', component: DogsImagesComponent},
  {path: ':breed/:subBreed/images', component: DogsImagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
