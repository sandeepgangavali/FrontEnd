import { TestBed } from '@angular/core/testing';

import { ListMoviesService } from './list-movies.service';

describe('ListMoviesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListMoviesService = TestBed.get(ListMoviesService);
    expect(service).toBeTruthy();
  });
});
