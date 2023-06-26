import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { HobbiesRoutingModule } from './hobbies-routing.module'
import { HobbiesComponent } from './hobbies.component'

@NgModule({
  declarations: [
    HobbiesComponent
  ],
  imports: [
    CommonModule,
    HobbiesRoutingModule,
    MatButtonModule
  ]
})
export class HobbiesModule { }