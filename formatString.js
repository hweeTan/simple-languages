const placeholderRegex = /(\{[\d|\w]+\})/

const formatString = (str, ...valuesForPlaceholders) => {
  const res = (str || '')
    .split(placeholderRegex)
    .filter(textPart => !!textPart)
    .map(textPart => {
      if (textPart.match(placeholderRegex)) {
        const matchedKey = textPart.slice(1, -1)
        let valueForPlaceholder = valuesForPlaceholders[matchedKey]

        if (valueForPlaceholder == undefined) {
          const valueFromObjectPlaceholder =
            valuesForPlaceholders[0][matchedKey]
          if (valueFromObjectPlaceholder !== undefined) {
            valueForPlaceholder = valueFromObjectPlaceholder
          } else {
            return valueForPlaceholder
          }
        }

        return valueForPlaceholder
      }
      return textPart
    })
  return res.join('')
}

module.exports = formatString
