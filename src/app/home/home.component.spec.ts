import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { UserService } from '../user.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit the form', () => {
    const form = component.nameForm;
    form.controls.name.setValue('name'); 
    spyOn(userService, 'setField');

    component.onSubmit();

    expect(component.isSubmitted).toBeTrue();
    expect(component.name).toEqual('name');
    expect(userService.setField).toHaveBeenCalledWith('name');
  });

  it('should not submit the form when name is empty', () => {
    const form = component.nameForm;
    form.controls.name.setValue(null); 

    component.onSubmit();

    expect(component.isSubmitted).toBeFalse();
  });
});
