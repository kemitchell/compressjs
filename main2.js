if (typeof console.assert !== "function") { console.assert = function () {} };
exports.BWT = require('./outlib/BWT');
exports.BWTC = require('./outlib/BWTC');
exports.BitStream = require('./outlib/BitStream');
exports.Bzip2 = require('./outlib/Bzip2');
exports.CRC32 = require('./outlib/CRC32');
exports.Context1Model = require('./outlib/Context1Model');
exports.DefSumModel = require('./outlib/DefSumModel');
exports.DeflateDistanceModel = require('./outlib/DeflateDistanceModel');
exports.Dmc = require('./outlib/Dmc');
exports.DummyRangeCoder = require('./outlib/DummyRangeCoder');
exports.FenwickModel = require('./outlib/FenwickModel');
exports.Huffman = require('./outlib/Huffman');
exports.HuffmanAllocator = require('./outlib/HuffmanAllocator');
exports.LogDistanceModel = require('./outlib/LogDistanceModel');
exports.Lzjb = require('./outlib/Lzjb');
exports.LzjbR = require('./outlib/LzjbR');
exports.Lzp3 = require('./outlib/Lzp3');
exports.MTFModel = require('./outlib/MTFModel');
exports.NoModel = require('./outlib/NoModel');
exports.PPM = require('./outlib/PPM');
exports.RangeCoder = require('./outlib/RangeCoder');
exports.Simple = require('./outlib/Simple');
exports.Stream = require('./outlib/Stream');
exports.Util = require('./outlib/Util');
exports.freeze = require('./outlib/freeze');
