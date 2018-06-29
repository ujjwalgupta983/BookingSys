import { TabledataService } from './table-data.service';
import { TestBed, inject } from '@angular/core/testing';


describe('TableDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TabledataService]
    });
  });

  it('should be created', inject([TabledataService], (service: TabledataService) => {
    expect(service).toBeTruthy();
  }));
});
