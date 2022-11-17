![gmpays](https://i.imgur.com/MVfNBfC.png)

[gmpays](https://gmpays.com/) Node.js Library

API docs [here](https://cp.gmpays.com/apidoc)

## Installation

```sh
$ npm i gmpays
```

## Usage

```javascript
import GM from 'gmpays'

const gm = new GM({
  project,
  hmacPrivateKey,

  // Optional. But to make checkouts must be specified
  rsaPrivateKey: Buffer
    .from(rsaPrivateKey, 'base64')
    .toString('utf-8')
})

await gm.getBalanceStatistics({
  currency: 'USD'
})

await gm.getDaysBalanceStatistics({
  currency: 'BTC',
  start: '2032-01-01',
  finish: '2032-12-31'
})

await gm.getExchangeRate({
  from: 'USD',
  to: 'BTC'
})
```

## Examples

See more examples [here](https://github.com/gmpays-sdk/gmpays/tree/main/src/examples)
