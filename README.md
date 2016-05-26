# hapi template

#Given

replace instances of Foo + update config/local/test/development with
updated databases when using

# Setup

consider installing nvm

install node

install postgres

this is running on npm 4.2.1 (if you installed nvm, just => nvm use 4.2.1)

set up your config/local.json file to match your postgres credentials

it should look like
```
{
  "db": {
  "username": "<usernamehere>",
  "password": "",
  }
}
```

run the following:

```
npm install
NODE_ENV=development npm run create_db
npm start
```

# Testing

run:
```
NODE_ENV=test npm run create_db
npm test
```
