import { TestBed } from '@angular/core/testing';

import { TareasComunesService } from './tareas-comunes.service';

describe('TareasComunesService', () => {
  let service: TareasComunesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TareasComunesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
