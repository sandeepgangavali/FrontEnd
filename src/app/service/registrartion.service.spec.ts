import { TestBed } from '@angular/core/testing';

import { RegistrartionService } from './registrartion.service';

describe('RegistrartionserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistrartionService = TestBed.get(RegistrartionService);
    expect(service).toBeTruthy();
  });
});
