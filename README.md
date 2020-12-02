# Exploring Node.js libraries for AWS Kinesis

## Libraries

Investigating

- [AWSLABS/amazon-kinesis-client-nodejs](https://github.com/awslabs/amazon-kinesis-client-nodejs): The library from AWS uses Java and a multi-lang KCL adapter. It only supports enhanced-fanout after [version 2.0.0](https://github.com/lifion/lifion-kinesis).
- [Lifion-Kinesis library](https://github.com/lifion/lifion-kinesis): This library from Lifion is built in Javascript, and supports enhanced-fanout.

Lifion's introduction to their library explains why they created it: https://eng.lifion.com/introducing-lifion-kinesis-eecb3133221e Some of their reasons were that the KCL library requires Java, and they didn't want to run the JVM. They also wanted to be able to use the enhanced consumer to recieve messages via push, instead of the original pull method. The official AWS Node.js driver did not support enhanced fan-out consumers, and I'm not sure if it does today.

