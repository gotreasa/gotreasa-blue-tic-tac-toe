const path = require('path');
const { versionFromGitTag } = require('@pact-foundation/absolute-version');
const { Verifier } = require('@pact-foundation/pact');
const server = require('../../app');

const providerOptions = {
  logLevel: 'INFO',
  providerBaseUrl: `http://localhost:${process.env.SERVER_PORT || 9080}`,
  provider: 'Tic Tac Toe Application',
  providerVersion: versionFromGitTag(),
  matchingRules: {
    body: {},
  },
  stateHandlers: {},
};

if (process.env.CI || process.env.PACT_PUBLISH_RESULTS) {
  Object.assign(providerOptions, {
    pactBrokerUrl: 'https://gotreasa.pact.dius.com.au/',
    publishVerificationResult: true,
    providerVersionTags: ['dev'],
  });
} else {
  Object.assign(providerOptions, {
    pactUrls: [
      path.resolve(
        __dirname,
        '../../pact/pacts/tic_tac_toe_client-tic_tac_toe_application.json',
      ),
    ],
  });
}

describe('Test Tic Tac Toe Provider', () => {
  afterAll(async () => {
    await server.close();
  });

  test('should verify all of the Tic Tac Toe Api routes', async () => {
    try {
      const output = await new Verifier(providerOptions).verifyProvider();
      console.log(output);
      expect(output).toContain('0 failures');
    } catch (error) {
      console.log(error.message);
      // eslint-disable-next-line jest/no-conditional-expect
      expect(error).toBeNull();
    }
  });
});
