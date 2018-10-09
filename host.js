const IPFS = require('ipfs')
const OrbitDB = require('orbit-db')

const ipfsOptions = {
  start: true,
  EXPERIMENTAL: {
    pubsub: true,
  },
  config: {
    Addresses: {
      Swarm: [
        '/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star'
      ]
    },
  }
}

const ipfs = new IPFS(ipfsOptions)

ipfs.on('error', (e) => console.error(e))

ipfs.on('ready', async () => {

  const orbitdb = new OrbitDB(ipfs)

  const db = await orbitdb.docs('trainingdata', {
    create: true,
    overwrite: true,
    localOnly: false,
    write: ['*'], // ALLOW ALL WRITE, read not yet in OrbitDB
  })

  await db.load()

  console.log('Put this in your config file:')
  console.log(db.address.toString())

  //TODO: for entries in json db.put entry
  //await db.put({ _id: '01', val: 10 })

})
