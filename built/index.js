"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mqFunc = exports.esFunc = undefined;

var _elastic = require("./lib/elastic");

var _elastic2 = _interopRequireDefault(_elastic);

var _mq = require("./lib/mq");

var _mq2 = _interopRequireDefault(_mq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    esFunc: _elastic2.default,
    mqFunc: _mq2.default
};
var esFunc = exports.esFunc = _elastic2.default;
var mqFunc = exports.mqFunc = _mq2.default;