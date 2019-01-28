#!/usr/bin/env node
'use strict';
const meow = require('meow');
const {parseLangResource, parseCliInput} = require('./parseResource');
const {writeToLanguageFile} = require('./fileHandler');

const missingKey = 'Missing: language and string. Example: npm-i18n-helper add HELLO en="Hello World" ';
const missingLangCodeStr = 'Missing: language and string. Example: npm-i18n-helper add HELLO en="Hello World" ';
const cli = meow(
  `
  Usage
    $ npm-i18n-helper add key langCode="str". Ex: npm-i18n-helper add hello en="Hello World"
`
);

if (cli.input.length === 0) {
  cli.showHelp();
  return;
}

if (cli.input.length === 1) {
  console.error(missingKey);
  cli.showHelp();
  return;
}
if (cli.input.length === 2) {
  console.error(missingLangCodeStr);
  cli.showHelp();
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
