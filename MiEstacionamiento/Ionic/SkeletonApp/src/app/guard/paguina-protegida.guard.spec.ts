import { TestBed } from '@angular/core/testing';

import { PaguinaProtegidaGuard } from './paguina-protegida.guard';

describe('PaguinaProtegidaGuard', () => {
  let guard: PaguinaProtegidaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PaguinaProtegidaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
