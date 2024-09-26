import createLanguages from '../createLanguages'

describe('Languages should be create registered and then updated correctly', () => {
  test('init two languages', () => {
    const en = {
      hello: 'Hello',
    }

    const vi = {
      hello: 'Xin chào',
    }

    const Languages = createLanguages()
    Languages.data.en = en
    Languages.data.vi = vi

    expect(Languages.hello).toEqual('Hello')
    expect(Languages.goodbye).toEqual(
      'missing translation for "goodbye" in "en"',
    )

    Languages.lang = 'vi'
    expect(Languages.hello).toEqual('Xin chào')
  })
})
