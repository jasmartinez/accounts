import { Test } from '@nestjs/testing';

import { FeaturesAccountService, responseMock } from './features-accounts.service';

describe('FeaturesAccountService', () => {
  let service: FeaturesAccountService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [FeaturesAccountService],
    }).compile();

    service = app.get<FeaturesAccountService>(FeaturesAccountService);
  });

  describe('getData', () => {
    it('should return "ResponseMock"', () => {
      service.getData().subscribe((response)=>{
        expect(response).toEqual(responseMock);
      });
    });
  });
});
