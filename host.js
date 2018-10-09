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
    write: ['*'], // ALLOW ALL TO WRITE
  })

  await db.load()

  console.log(db.address.toString())

  // In future: for entries in json db.put entry
  await db.put({ _id: '01', val: 10 })

  const value = db.get('01')
  console.log(value)

})
