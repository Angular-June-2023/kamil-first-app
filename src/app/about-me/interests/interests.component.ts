import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { INTERESTS } from 'src/db-data';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent {
  
  interests = INTERESTS;

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
