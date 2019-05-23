# Languages

A small wrapper for switching languages.

## Installation

`npm install --save react-localization`

## Usage

```js
import createLanguages from 'languages'

// create the Languages object
const Languages = createLanguages()

// set the language, it is 'en' by default
Languages.lang = 'vi'

// set the language data, it can be overwrite anytime
Languages.data = {
  en: {
    hello: 'Hello'
  },
  vi: {
    hello: 'Xin chào'
  }
}

console.log(Languages.hello) // Xin chào

Languages.lang = 'en' // change language by setting the lang property

console.log(Languages.hello) // Hello
```
