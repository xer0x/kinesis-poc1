# Exploring Node.js libraries for AWS Kinesis

## Libraries

We're evaluating the following libraries for our Kinesis project:

- [awslabs/amazon-kinesis-client-nodejs](https://github.com/awslabs/amazon-kinesis-client-nodejs)
- [lifion/lifion-kinesis](https://github.com/lifion/lifion-kinesis)

### Amazon Kinesis Client for Node.js

The library from AWS is not pure Javascript because it uses a Java project called the multi-lang KCL adapter. This means we need extra dependencies to run the library. The library supports enhanced-fanout after [version 2.0.0](https://github.com/lifion/lifion-kinesis).

### Lifion's Kinesis Client

Lifion's introduction to their library explains why they created it: https://eng.lifion.com/introducing-lifion-kinesis-eecb3133221e 

They mention that the KCL library requires Java, and they didn't want to run the JVM. They also say that the Node.js to JVM interface is done over STDIN/STDOUT and they had already reserved that for another process. Plus they wanted the extra performance from the enhanced fan-out consumer to recieve messages via push, instead of the original pull method. At the time, the official AWS Node.js driver did not support enhanced fan-out consumers.

