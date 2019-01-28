# i18n-helper
 The lib goal is to provide an easier i18n resource handling.

 It is inspired by [@ngx-translate/core](https://github.com/ngx-translate/core/) structure. But it can be used in any project with the same structure.

 This lib requires the following folder structure:
```
PROJECT_ROOT
│
└───src
│   │
│   └───assets
│       │   
│       └───i18n
│       │   │   en.json
│       │   |   pt.json
│       │   |   ...
```

# Install
Locally on your project:

    npm install i18n-helper --save-dev
Global install:

    npm install -g i18n-helper

# Test

    npm test

# Usage

    i18n-helper add [key] [languageKey]="[String]"
Example:

    i18n-helper add HELLO en="Hello World!"

It will produce the following entry in the  'en.json' (if the file doesn't exist it will be created) file:
```
{
  "HELLO": "Hello World!"
}
```

You can add multiple languages at once:

    i18n-helper add HELLO en="Hello World!" pt="Olá mundo!"

It supports nesting keys:

    i18n-helper add HELLO.WORLD en="Hello World!" pt="Olá mundo!"    

it will produce:

```
{
  "HELLO": {
      "WORLD": "Hello World!"
  }
}
```
    


