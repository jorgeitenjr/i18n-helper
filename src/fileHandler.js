'use strict';
const fs = require('fs');
const lodash = require('lodash');

const defaultSrc = lang => `src/assets/i18n/${lang}.json`;
const writeToLanguageFile = (composedKey, language, string) => {
  const src = defaultSrc(language);
  try {
    fs.closeSync(fs.openSync(src, 'a'));
    const data = fs.readFileSync(src);
    const languageResource = JSON.parse(data.length ? data : '{}');
    lodash.set(languageResource, composedKey, string);
    fs.writeFileSync(src, JSON.stringify(languageResource, '', 2));
  } catch (error) {
    throw `Unable to open file ${src}`;
  }
};

module.exports.writeToLanguageFile = writeToLanguageFile;
module.exports.defaultSrc = defaultSrc;
