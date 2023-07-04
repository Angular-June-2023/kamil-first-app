import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';
import { HobbiesComponent } from './hobbies.component';

describe('HobbiesComponent', () => {
  let component: HobbiesComponent;
  let fixture: ComponentFixture<HobbiesComponent>;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HobbiesComponent]
    });
    fixture = TestBed.createComponent(HobbiesComponent);
    component = fixture.componentInstance;
    location = TestBed.inject(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go back to the previous location', () => {
    spyOn(location, 'back');
    component.goBack();
    expect(location.back).toHaveBeenCalled();
  })
});
