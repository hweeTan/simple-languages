const createLanguages = require('../createLanguages')
const formatString = require('../formatString')

describe('Languages should be create registered and then updated correctly', () => {
  test('init two languages', () => {
    const en = {
      hello: 'Hello, {0} {1}!!!'
    }

    const firstName = 'Huy'
    const lastName = 'Tran'

    const Languages = createLanguages()
    Languages.formatString = formatString
    Languages.data.en = en

    expect(
      Languages.formatString(Languages.hello, firstName, lastName)
    ).toEqual('Hello, Huy Tran!!!')
  })
})
