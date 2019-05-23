const placeholderRegex = /(\{[\d|\w]+\})/

const formatString = (str, ...valuesForPlaceholders) =>
  str
    .split(placeholderRegex)
    .filter(textPart => !!textPart)
    .map(textPart =>
      textPart.match(placeholderRegex)
        ? valuesForPlaceholders[textPart.slice(1, -1)]
        : textPart
    )
    .join('')

module.exports = formatString
