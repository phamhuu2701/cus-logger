import logger from './index.js'

let items = [
  'hello',
  1,
  true,
  { b: true },
  { message: 'welcome' },
  [1, 2, 3],
  null,
  undefined,
  { message: 'hello', callback: () => console.log('asasdasd') },
]

for (let item of items) {
  console.log('\nitem :>> ', item)
  logger(item, () => console.log('asasdasd'))
}
