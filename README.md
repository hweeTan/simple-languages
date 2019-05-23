# Simple Languages

A small wrapper for switching languages.

## Installation

`npm install --save simple-languages`
or
`yarn add simple-languages`

## Usage

Basic usage

```js
import createLanguages from 'simple-languages'

// create the Languages object
const Languages = createLanguages()

// set the language, it is 'en' by default
Languages.lang = 'vi'

/* set the language data, it can be overwrite anytime
 * please note that the word "formatString", "lang" and "data" are reserved
 */
Languages.data = {
  en: {
    hello: 'Hello'
  },
  vi: {
    hello: 'Xin chào'
  }
}

console.log(Languages.hello) // => Xin chào

Languages.lang = 'en' // change language by setting the lang property

console.log(Languages.hello) // => Hello
```

### Format string with placeholder

#### Basic usage

```js
import createLanguages from 'simple-languages'
import formatString from 'simple-languages/formatString'

const Languages = createLanguages()
Languages.data.en = {
  hello: 'Hello, {0} and {1}!!!'
}

// ...do the same as above then
Languages.formatString = formatString

console.log(Languages.formatString(Languages.hello, 'John', 'David')) // => Hello, John and David!!!
```

#### With react

```js
import formatString from 'simple-languages/formatString-react'
```
