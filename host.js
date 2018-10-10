const data = require('./data/data.json')
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

console.log(data.truth);

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

  // async forEach withon the IPFS on ready is problematic, just put manually
  await db.put( { _id: 'x', array: data.x })
  await db.put( { _id: 'y', array: data.y })
  await db.put( { _id: 't', array: data.truth })

  console.log(db.query((doc) => doc))

})
