import { TestBed } from '@angular/core/testing';

import { FavoriteMovieService } from './favorite-movie.service';

describe('FavoriteMovieserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavoriteMovieService = TestBed.get(FavoriteMovieService);
    expect(service).toBeTruthy();
  });
});
