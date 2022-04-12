const { pactWith } = require('jest-pact');
const { versionFromGitTag } = require('@pact-foundation/absolute-version');
const axios = require('axios');
const { term, eachLike } = require('@pact-foundation/pact/src/dsl/matchers');

const OK = 200;

const X_MARKER = term({
  generate: 'X',
  matcher: 'X|O| ',
});

const O_MARKER = term({
  generate: 'O',
  matcher: 'X|O| ',
});

const SPACE_MARKER = term({
  generate: ' ',
  matcher: 'X|O| ',
});

pactWith(
  {
    consumer: 'Tic Tac Toe Client',
    provider: 'Tic Tac Toe Application',
    pactBroker: 'https://gotreasa.pact.dius.com.au/',
    pactBrokerToken: process.env.PACT_BROKER_TOKEN,
    consumerVersion: versionFromGitTag(),
  },
  (provider) => {
    describe('Tic Tac Toe APIs', () => {
      let instance;

      beforeEach(() => {
        instance = axios.create({
          baseURL: provider.mockService.baseUrl,
        });
      });

      describe('Health Endpoint', () => {
        const path = '/api/v1/health';

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

      describe('Play endpoint', () => {
        const path = '/api/v1/play';

        beforeEach(() => {
          return provider.addInteraction({
            uponReceiving: 'a request for the play API',
            withRequest: {
              method: 'GET',
              path,
            },
            willRespondWith: {
              status: OK,
              headers: {
                'Content-Type': 'application/json; charset=utf-8',
              },
              body: eachLike(
                {
                  board: [
                    X_MARKER,
                    O_MARKER,
                    O_MARKER,
                    X_MARKER,
                    SPACE_MARKER,
                    SPACE_MARKER,
                    X_MARKER,
                    SPACE_MARKER,
                    SPACE_MARKER,
                  ],
                  status: term({
                    matcher: 'X_WON|O_WON|DRAW',
                    generate: 'X_WON',
                  }),
                },
                { min: 5, max: 10 },
              ),
            },
          });
        });

        test('should return a response of OK', async () => {
          const response = await instance.get(path);
          expect(response.status).toBe(OK);
        });

        test('should return a valid game body', async () => {
          const response = await instance.get(path);
          expect(response.data).toEqual([
            {
              board: ['X', 'O', 'O', 'X', ' ', ' ', 'X', ' ', ' '],
              status: 'X_WON',
            },
            {
              board: ['X', 'O', 'O', 'X', ' ', ' ', 'X', ' ', ' '],
              status: 'X_WON',
            },
            {
              board: ['X', 'O', 'O', 'X', ' ', ' ', 'X', ' ', ' '],
              status: 'X_WON',
            },
            {
              board: ['X', 'O', 'O', 'X', ' ', ' ', 'X', ' ', ' '],
              status: 'X_WON',
            },
            {
              board: ['X', 'O', 'O', 'X', ' ', ' ', 'X', ' ', ' '],
              status: 'X_WON',
            },
          ]);
        });
      });
    });
  },
);
