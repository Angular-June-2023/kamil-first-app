import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';
import { InterestsComponent } from './interests.component';

describe('InterestsComponent', () => {
  let component: InterestsComponent;
  let fixture: ComponentFixture<InterestsComponent>;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterestsComponent]
    });
    fixture = TestBed.createComponent(InterestsComponent);
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
