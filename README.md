# cus-logger

A simple custom logging that combines the simple APIs of Node's console.log()

### Instantiation

    # npm
    npm i cus-logger

    # yarn
    yarn add cus-logger

### Usage

In Node.js:

    import logger from 'cus-logger'

Simple logger:

    logger('hello world')
    🚀 logger: hello world

    logger(1)
    🚀 logger: 1

    logger(true)
    🚀 logger: true

    logger({ message: 'hello world' })
    🚀 logger: hello world

Logger with callback function:

    logger({
      message: 'hello world',
      callback: () => console.log('callback'),
    })
    🚀 logger: hello world
    callback

### Customization

Comming soon.

### License

Unlicense.
