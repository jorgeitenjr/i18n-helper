const {writeToLanguageFile} = require('./fileHandler');
const mock = require('mock-fs');

describe('Test invalid file path', () => {
  beforeEach(async () => {
    // Creates an in-memory file system
    mock({
      no_src: {
        assets: {
          i18n: {
            'en.json': '{}',
          },
        },
      },
    });
  });

  afterEach(async () => {
    mock.restore();
  });

  it('should throw "Unable to open file src/assets/i18n/en.json" message', () => {
    const parseInvalidResource = () => writeToLanguageFile('test', 'en', 'Hello world');
    expect(parseInvalidResource).toThrowError('Unable to open file src/assets/i18n/en.json');
  });
});
