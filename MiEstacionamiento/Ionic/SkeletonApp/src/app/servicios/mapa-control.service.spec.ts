import { TestBed } from '@angular/core/testing';

import { MapaControlService } from './mapa-control.service';

describe('MapaControlService', () => {
  let service: MapaControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapaControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
