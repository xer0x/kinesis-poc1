
const KinesisClient = require('lifion-kinesis/lib/kinesis-client');

// TODO: do we want to use consumer-manager instead?
const FanOutConsumer = require('lifion-kinesis/lib/fan-out-consumer');


const streamName = 'example-stream';

const stateStore = {
  getShardsData: async () => {
    return { shardsPath: 'shardsPath', shardsPathNames: 'shardsPathNames' }
  },
  markShardAsDepleted: async (shards, shardId) => {
    console.log({shards, shardId});
    return;
  },
  storeShardCheckpoint: async (shardId, sequenceNumber, shardsPath, shardsPathNames) => {
    console.log({shardId, sequenceNumber, shardsPath, shardsPathNames});
    return;
  }
}

const stopConsumer = (shardId) => {
  console.log('stop consumer: ', shardId);
}

const pushToStream = (err, data) => {
  console.log({data});
};

const logger = {
  info: console.log,
  error: console.log,
  debug: console.log,
  warn: console.log
}

/*
const awsOptions = {
  endpoint: 'http://localhost:45666',
  region: 'eu-west-1',
};
*/

const client = new KinesisClient({
  awsOptions: {
    endpoint: 'http://localhost:4566',
    region: 'eu-west-1',
  },
  logger,
  streamName
});

const consumer = new FanOutConsumer({
  awsOptions: {
    endpoint: 'http://localhost:45661',
    region: 'eu-west-1'
  },
  streamName,
  checkpoint: undefined,
  client,
  shardId: 'shardId-000000000000',
  stateStore,
  logger,
  stopConsumer,
  pushToStream,
  leaseExpiration: Date.now() + (5 * 60 * 1000),
});

const main = async () => {
  await consumer.start();
}

main();

/*
consumer.on('data', data => {
  console.log('Incoming data:', data);
});
*/

/*
const kinesis = new Kinesis({
  endpoint: 'http://0:4566',
  region: 'eu-west-1',
  //consumerName: 'sample-consumer',
  streamName: 'example-stream',
  dynamoDb: {
    endpoint: 'http://0:4566',
    region: 'us-west-3',
    apiVersion: '2012-08-10',
    tableName: 'lifion-kinesis-state',
  },
  // etc
});

kinesis.on('data', data => {
  console.log('Incoming data:', data);
});

kinesis.startConsumer().then(() => {
  console.log('Kinesis consumer started');
}).catch(err => {
  console.log(`Error: ${err}`);
});
*/
