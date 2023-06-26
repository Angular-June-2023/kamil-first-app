import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { InterestsRoutingModule } from './interests-routing.module';
import { InterestsComponent } from './interests.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    InterestsComponent
  ],
  imports: [
    CommonModule,
    InterestsRoutingModule,
    MatButtonModule
  ]
})
export class InterestsModule { }
