'use strict';
const parseLangResource = langResource => {
  const keyAndValue = langResource.split(/=(.+)/);
  if (keyAndValue.length !== 3) {
    throw 'Invalid Format';
  }
  return {
    lang: keyAndValue[0],
    string: keyAndValue[1],
  };
};

const parseCliInput = input => {
  const [key, ...langResources] = input;
  if (!key) {
    throw 'Invalid key';
  }
  if (!Array.isArray(langResources)) {
    throw 'Invalid Format';
  }
  return {key, langResources};
};

module.exports.parseLangResource = parseLangResource;
module.exports.parseCliInput = parseCliInput;
