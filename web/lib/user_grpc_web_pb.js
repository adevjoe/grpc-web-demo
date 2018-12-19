/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./user_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.UserClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.UserPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.UserClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.UserClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.GetUserInfoReq,
 *   !proto.GetUserInfoRsp>}
 */
const methodInfo_User_GetUserInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.GetUserInfoRsp,
  /** @param {!proto.GetUserInfoReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetUserInfoRsp.deserializeBinary
);


/**
 * @param {!proto.GetUserInfoReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.GetUserInfoRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetUserInfoRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.UserClient.prototype.getUserInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/User/GetUserInfo',
      request,
      metadata,
      methodInfo_User_GetUserInfo,
      callback);
};


/**
 * @param {!proto.GetUserInfoReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetUserInfoRsp>}
 *     The XHR Node Readable Stream
 */
proto.UserPromiseClient.prototype.getUserInfo =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getUserInfo(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto;

