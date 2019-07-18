import { NgModule } from '@angular/core';
import {
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatProgressSpinnerModule
 } from '@angular/material';

@NgModule({
  exports: [
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule
  ]
})
export class AngularMaterialModule {}
