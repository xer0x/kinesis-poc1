const Kinesis = require('lifion-kinesis');

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
  for ({
});

kinesis.startConsumer().then(() => {
  console.log('Kinesis consumer started');
}).catch(err => {
  console.log(`Error: ${err}`);
});
