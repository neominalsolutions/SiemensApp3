import { TestBed } from '@angular/core/testing';

import { UserPageResolver } from './user-page.resolver';

describe('UserPageResolver', () => {
  let resolver: UserPageResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(UserPageResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
