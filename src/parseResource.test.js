const {parseLangResource, parseCliInput} = require('./parseResource');
describe('Parse functions', () => {
  it('should return valid key and array of language resources', () => {
    const {key, langResources} = parseCliInput(['myKey', 'en=test', 'pt=test']);
    expect(key).toEqual('myKey');
    expect(langResources).toEqual(expect.arrayContaining(['en=test', 'pt=test']));
  });
  it('should return valid object and language keys strings', () => {
    const {lang, string} = parseLangResource('en=test=test2');
    expect(lang).toEqual('en');
    expect(string).toEqual('test=test2');
  });
  it('should throw "Invalid key" message', () => {
    const parseInvalidKey = () => parseCliInput(['']);
    expect(parseInvalidKey).toThrowError('Invalid key');
  });
  it('should throw "Invalid Format" message', () => {
    const parseInvalidResource = () => parseLangResource('test');
    expect(parseInvalidResource).toThrowError('Invalid Format');
  });
});
