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
      console.log(`🚀 logger:`, payload)
      break

    default:
      console.log(`🚀 logger:`, payload?.message)
      break
  }

  if (payload?.callback) {
    payload.callback()
  }
}

export default logger
