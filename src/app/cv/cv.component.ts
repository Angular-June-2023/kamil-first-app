import { Component } from '@angular/core';
import { EDUCATION, EXPERIENCE, SKILLS } from 'src/db-data';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  skills = SKILLS;

  experience = EXPERIENCE;

  education = EDUCATION;
}
