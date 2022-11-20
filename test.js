import logger from './index.js'

let items = ['hello', 69, true, { a: true }, [1, 2, 3], null, undefined]

for (let item of items) {
  logger(item)
}
