import { TestBed } from '@angular/core/testing';

import { AngularBulmaService } from './angular-bulma.service';

describe('AngularBulmaService', () => {
  let service: AngularBulmaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularBulmaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
