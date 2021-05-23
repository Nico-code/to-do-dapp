# Crypto Bets

# Install dependencies

```
npm install
```

# Run project in dev mode (hot reloading)

```
npm run start
```

# Run ganache (local blockchain)
## Make sure to create the blockchain folder first

```
mkdir -p ./blockchain
```

## Run this npm script to always have the same addresses and balances
```
npm run blockchain
```

# Run truffle compile && migrate
```
npm run contracts
```

## Project should be available on localhost:1234

# Build project (For release)

```
npm run build
```

## Deploy to public (test) blockchain

### it is required to set these env vars:

- INFURA_KEY

- INFURA_PROJECT_ID

- MNEMONIC

```
truffle migrate --network ropsten
```
