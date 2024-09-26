const placeholderRegex = /(\{[\d|\w]+\})/

const formatString = (str, ...valuesForPlaceholders) => {
  let hasObject = false
  const res = str
    .split(placeholderRegex)
    .filter((textPart) => !!textPart)
    .map((textPart, index) => {
      if (textPart.match(placeholderRegex)) {
        const valueForPlaceholder = valuesForPlaceholders[textPart.slice(1, -1)]

        if (React.isValidElement(valueForPlaceholder)) {
          hasObject = true
          return React.Children.toArray(valueForPlaceholder).map(
            (component) => ({
              ...component,
              key: index.toString(),
            }),
          )
        }

        return valueForPlaceholder
      }
      return textPart
    })

  if (hasObject) return res
  return res.join('')
}

export default formatString
