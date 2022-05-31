const htJ2kJs = require('./../src');
const { Decoder } = htJ2kJs;

// https://www.html5rocks.com/en/tutorials/webgl/typed_arrays/

const fs = require('fs');

const fileBuffer = fs.readFileSync('./examples/an_htj2k.file');
const arrayBuffer = fileBuffer.buffer.slice(
  fileBuffer.byteOffset,
  fileBuffer.byteOffset + fileBuffer.byteLength
);

const htj2kd = new Decoder(arrayBuffer, { logSegmentMarkers: true, logBoxes: true });
const ret = htj2kd.readHeader();
const ret2 = htj2kd.decode();

console.log('ret:', ret);
