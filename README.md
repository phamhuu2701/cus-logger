# hdev-logger

## Getting Started

A simple logging library that combines the simple APIs of Node's console.log()

### Instantiation:

    # npm
    npm i hdev-logger

    # yarn
    yarn add hdev-logger

### Usage

In Node.js:

    import logger from 'hdev-logger'

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

### Customization:

Comming soon.

### License

<!-- [MIT](https://choosealicense.com/licenses/mit/) license -->

Unlicense.
