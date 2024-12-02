import { TestBed } from '@angular/core/testing';

import { ListOfResidencesService } from './list-of-residences.service';

describe('ListOfResidencesService', () => {
  let service: ListOfResidencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListOfResidencesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
