import { Component } from '@angular/core';
import { UserService } from './user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  name: string = '';

  constructor(private sharedService: UserService) { }

  ngOnInit(): void {
    this.sharedService.name$.subscribe(value => {
      this.name = value;
    });
  }  
}
