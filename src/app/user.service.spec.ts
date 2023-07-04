import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set field to the desired string', (done) => {
    const name = 'name';
    
    service.name$.subscribe(value => {
      expect(value).toBe(name);
      done();
    });

    service.setField(name);
  });
});
