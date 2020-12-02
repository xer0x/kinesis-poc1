# Kinesis 

## Learning how to read

There is the main AWS SDK Javascript driver for Kinesis. It may not support being an enhanced fanout consumer, and we may want to be. We also might not care.

- AWS SDK 
- Lifion library

Here is Lifion's introduction to their driver in 2018, and why they created it: https://eng.lifion.com/introducing-lifion-kinesis-eecb3133221e tl;dr the KCL library is Java only, and they didn't want to run the JVM. They also wanted to be able to use the enhanced consumer to recieve messages via push, instead of the original pull method. The driver did not support pull in the beginning, but it may by now.

