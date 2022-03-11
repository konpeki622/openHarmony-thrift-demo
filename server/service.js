const thrift = require('thrift');

const TAccountService = require('./gen-nodejs/TAccountService'),
	TAccountTypes = require('./gen-nodejs/account_types');

const actions = {
  accounts: {},
  createAccount (account) {
	console.log('server createAccount:', account.uid);
	this.accounts[account.uid] = account
    return
  },
  getAccount (uid) {
	console.log('server getAccount:', uid);
    return this.accounts[uid]
  }
}

const serverOptions = {
  files: '.',
  cors: {
    '*': true
  },
  transport: '127.0.0.1',
  services: {
    '/': {
      transport: thrift.TBufferedTransport,
      protocol: thrift.TJSONProtocol,
      processor: TAccountService,
      handler: actions,
    }
  }
}

const server = thrift.createWebServer(serverOptions)
server.listen(3040);
console.log('service started successfully')
console.log('listening: 127.0.0.1:3040')