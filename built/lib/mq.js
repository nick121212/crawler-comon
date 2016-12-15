"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FxMq = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _amqplib = require("amqplib");

var _amqplib2 = _interopRequireDefault(_amqplib);

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var connection = void 0;

var FxMq = exports.FxMq = function () {
    function FxMq() {
        (0, _classCallCheck3.default)(this, FxMq);
    }

    (0, _createClass3.default)(FxMq, [{
        key: "init",
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(config) {
                var connectionStr;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                connectionStr = "amqp://" + config.user + ":" + config.password + "@" + config.host;

                                if (connection) {
                                    _context.next = 5;
                                    break;
                                }

                                _context.next = 4;
                                return _amqplib2.default.connect(connectionStr);

                            case 4:
                                connection = _context.sent;

                            case 5:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function init(_x) {
                return _ref.apply(this, arguments);
            }

            return init;
        }()
    }, {
        key: "getQueue",
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(config) {
                var channel, q;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return connection.createChannel();

                            case 2:
                                channel = _context2.sent;
                                _context2.next = 5;
                                return channel.assertQueue(config.name, _lodash2.default.extend({
                                    durable: true,
                                    exclusive: false,
                                    autoDelete: false
                                }, config.setting));

                            case 5:
                                q = _context2.sent;
                                return _context2.abrupt("return", {
                                    ch: channel,
                                    q: q
                                });

                            case 7:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getQueue(_x2) {
                return _ref2.apply(this, arguments);
            }

            return getQueue;
        }()
    }]);
    return FxMq;
}();

exports.default = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(config) {
        var q;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        q = new FxMq();
                        _context3.next = 3;
                        return q.init(config);

                    case 3:
                        return _context3.abrupt("return", q);

                    case 4:
                    case "end":
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    }));

    return function (_x3) {
        return _ref3.apply(this, arguments);
    };
}();