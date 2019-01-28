#!/usr/bin/env node
'use strict';
const meow = require('meow');
const {parseLangResource, parseCliInput} = require('./parseResource');
const {writeToLanguageFile} = require('./fileHandler');

const missingLangCodeStr = 'Missing: language and string. Example: i18n-helper add HELLO en="Hello World" ';
const cli = meow(
  `
  Usage
    $ i18n-helper add key langCode="str". Ex: i18n-helper add hello en="Hello World"
`
);

if (cli.input.length === 0) {
  cli.showHelp(1, {description: false});
  return;
}

if (cli.input.length === 1) {
  console.error(missingLangCodeStr);
  cli.showHelp(2, {description: false});
  return;
}

try {
  const {key, langResources} = parseCliInput(cli.input);
  for (const langResource of langResources) {
    const {lang, string} = parseLangResource(langResource);
    writeToLanguageFile(key.toUpperCase(), lang, string);
  }
} catch (error) {
  console.log(error);
}
