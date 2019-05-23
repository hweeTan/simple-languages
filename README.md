# Simple Languages

A small wrapper for switching languages. Inspired by [react-localization](https://github.com/stefalda/react-localization) and rewritten using [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) for a much smaller code base (50 ~ 80 lines of codes).

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
 * please note that the words "formatString", "lang" and "data" are reserved
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

## Caveats

Since this plugin using Proxy which is only supported by modern browsers. [https://caniuse.com/#search=proxy](https://caniuse.com/#search=proxy).

However, a [polyfill](https://github.com/GoogleChrome/proxy-polyfill) can be used to support IE9+.
