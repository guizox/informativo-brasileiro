/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GamesServiceService } from './games-service.service';

describe('GamesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GamesServiceService]
    });
  });

  it('should ...', inject([GamesServiceService], (service: GamesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
