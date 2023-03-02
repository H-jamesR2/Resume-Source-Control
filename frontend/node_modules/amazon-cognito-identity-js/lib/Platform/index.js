"use strict";

exports.__esModule = true;
exports.getUserAgent = exports["default"] = exports.Platform = void 0;
var _version = require("./version");
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

var BASE_USER_AGENT = "aws-amplify/" + _version.version;
var Platform = {
  userAgent: BASE_USER_AGENT + " js",
  product: '',
  navigator: null,
  isReactNative: false
};
exports.Platform = Platform;
if (typeof navigator !== 'undefined' && navigator.product) {
  Platform.product = navigator.product || '';
  Platform.navigator = navigator || null;
  switch (navigator.product) {
    case 'ReactNative':
      Platform.userAgent = BASE_USER_AGENT + " react-native";
      Platform.isReactNative = true;
      break;
    default:
      Platform.userAgent = BASE_USER_AGENT + " js";
      Platform.isReactNative = false;
      break;
  }
}
var getUserAgent = function getUserAgent() {
  return Platform.userAgent;
};

/**
 * @deprecated use named import
 */
exports.getUserAgent = getUserAgent;
var _default = Platform;
exports["default"] = _default;