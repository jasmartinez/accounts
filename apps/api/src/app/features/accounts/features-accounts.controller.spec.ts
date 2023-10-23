import { Test, TestingModule } from '@nestjs/testing';

import { FeaturesAccountController } from './features-accounts.controller';
import { FeaturesAccountService, responseMock } from './features-accounts.service';

describe('FeaturesAccountController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [FeaturesAccountController],
      providers: [FeaturesAccountService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "responseMock"', () => {
      const accountController = app.get<FeaturesAccountController>(FeaturesAccountController);
      accountController.getData().subscribe((response)=>{
        expect(response).toEqual(responseMock);
      })
    });
  });
});
