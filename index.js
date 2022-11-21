'use strict'

/**
 *
 * @param {Any} payload
 */
const logger = (payload) => {
  switch (typeof payload) {
    case 'string':
    case 'number':
    case 'boolean':
      console.log(`🚀 log:`, payload)
      break

    default:
      console.log(`🚀 log:`, payload?.message)
      break
  }

  if (payload?.callback) {
    payload.callback()
  }
}

export default logger
