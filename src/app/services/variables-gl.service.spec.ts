import { TestBed } from '@angular/core/testing';

import { VariablesGlService } from './variables-gl.service';

describe('VariablesGlService', () => {
  let service: VariablesGlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VariablesGlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
