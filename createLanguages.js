const createLanguages = () => {
  return new Proxy(
    {
      lang: 'en',
      data: {}
    },
    {
      get(obj, key) {
        if (key === 'lang' || key === 'data' || key === 'formatString') {
          return obj[key]
        }

        return obj.data[obj.lang] && obj.data[obj.lang][key]
          ? obj.data[obj.lang][key]
          : `missing translation for "${key}" in "${obj.lang}"`
      }
    }
  )
}

module.exports = createLanguages
