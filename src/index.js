'use strict'
import arrayUniq from 'array-uniq'

/**
 * Return a list of variables in a lodash template
 *
 * @param {String} template - template to examine for variables
 * @throws {TypeError} - if template is not a string
 * @return {String[]} - list of variable identifiers
 */
module.exports = template => {
  if (typeof template !== 'string') {
    throw new TypeError('Expected template to be a string')
  }

  /* eslint-disable no-inline-comments */
  const pattern = [
    '<%[=|-]?', // look for opening tag (<%, <%=, or <%-)
    '(?:[\\s]|if|\\()*', // accept any space after opening tag and before identifier
    '(.+?)', // capture the identifier name (`hello` in <%= hello %>)
    '(?:[\\s]|\\)|\\{)*', // accept any space after identifier and before closing tag
    '%>' // look for closing tag
  ].join('')
  /* eslint-enable no-inline-comments */

  const regex = new RegExp(pattern, 'g')

  const matches = []

  let match
  /* eslint-disable no-cond-assign */
  while (match = regex.exec(template)) {
  /* eslint-enable no-cond-assign */
    matches.push(match[1])
  }

  return arrayUniq(matches)
}
