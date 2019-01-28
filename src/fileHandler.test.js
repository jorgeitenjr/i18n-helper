const {writeToLanguageFile, defaultSrc} = require('./fileHandler');
const mock = require('mock-fs');
const fs = require('fs');
const lodash = require('lodash');

describe('Test writing operations on the resource files', () => {
  beforeEach(async () => {
    // Creates an in-memory file system
    mock({
      src: {
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
  it('should return the correct file path', () => {
    const expectedPath = 'src/assets/i18n/en.json';
    expect(defaultSrc('en')).toEqual(expectedPath);
  });
  it('should create a valid entry in json file', () => {
    const key = 'key';
    const lang = 'en';
    const resourceValue = 'Hello world';
    writeToLanguageFile(key, lang, resourceValue);
    const data = fs.readFileSync(defaultSrc(lang));
    const languageResource = JSON.parse(data);
    expect(languageResource[key]).toEqual(resourceValue);
  });
  it('should create a valid multi level json key/value', () => {
    const key = 'TOTAL.NEW.KEY';
    const lang = 'en';
    const resourceValue = 'testttt';
    writeToLanguageFile(key, lang, resourceValue);
    const data = fs.readFileSync(defaultSrc(lang));
    const languageResource = JSON.parse(data);
    expect(lodash.get(languageResource, key)).toEqual(resourceValue);
  });
});
