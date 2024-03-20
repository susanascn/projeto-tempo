import { TestBed } from '@angular/core/testing';

import { ServicoClimaService } from './servico-clima.service';

describe('ServicoClimaService', () => {
  let service: ServicoClimaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicoClimaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
