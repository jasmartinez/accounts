import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AccountsService } from './front-accounts.service';

describe('AccountsService', () => {
  let service: AccountsService;

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      providers:[AccountsService],
      imports: [HttpClientTestingModule] });
      service = TestBed.inject(AccountsService);
  });

  it('should be created', async () => {
    expect(service).toBeTruthy();
    const httpMock = TestBed.inject(HttpTestingController);

    service.fetchExchangeRate().subscribe((result) => {
      expect(result).toBe(12);
    });

    const mockRequest = httpMock.expectOne('api/accounts/exchange-rate');
    mockRequest.flush(12);
  });
});