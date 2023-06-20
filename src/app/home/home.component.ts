import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  name: any;

  nameForm = this.formBuilder.group({
    name: ['', Validators.required]
  });

  isSubmitted = false;

  constructor(private formBuilder: FormBuilder, 
    private userService: UserService) { }

  onSubmit(): void {
    let data = this.nameForm.value.name;

    if (data) {
      this.isSubmitted = true;
      this.name = data;
      this.userService.setField(this.name);
   
    } else {
      this.isSubmitted = false;
    }
  }
}
