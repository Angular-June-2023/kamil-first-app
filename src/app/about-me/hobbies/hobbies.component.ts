import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { HOBBIES } from 'src/db-data';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent {

  hobbies = HOBBIES;

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
