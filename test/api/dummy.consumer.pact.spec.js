const { pactWith } = require('jest-pact');
const { versionFromGitTag } = require('@pact-foundation/absolute-version');
const axios = require('axios');

const OK = 200;

pactWith(
  {
    consumer: 'Tic Tac Toe Client',
    provider: 'Tic Tac Toe Application',
    pactBroker: 'https://gotreasa.pact.dius.com.au/',
    pactBrokerToken: process.env.PACT_BROKER_TOKEN,
    consumerVersion: versionFromGitTag(),
  },
  (provider) => {
    describe('Health Endpoint', () => {
      let instance;
      const path = '/api/v1/health';

      beforeAll(() => {
        instance = axios.create({
          baseURL: provider.mockService.baseUrl,
        });
      });

      beforeEach(() => {
        return provider.addInteraction({
          uponReceiving: 'a request for the health API',
          withRequest: {
            method: 'GET',
            path,
          },
          willRespondWith: {
            status: OK,
          },
        });
      });

      test('should return a response of OK', async () => {
        const response = await instance.get(path);
        expect(response.status).toBe(OK);
      });
    });
  },
);
