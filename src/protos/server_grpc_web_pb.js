/**
 * @fileoverview gRPC-Web generated client stub for routeguide
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.routeguide = require('./server_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.routeguide.RouteGuideClient =
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
proto.routeguide.RouteGuidePromiseClient =
    function(hostname, credentials, options) {
        if (!options) options = {};
        options['format'] = 'text';

        /**
         * @private @const {!proto.routeguide.RouteGuideClient} The delegate callback based client
         */
        this.delegateClient_ = new proto.routeguide.RouteGuideClient(
            hostname, credentials, options);

    };


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.routeguide.userId,
 *   !proto.routeguide.userInfo>}
 */
const methodInfo_RouteGuide_getUserInfo = new grpc.web.AbstractClientBase.MethodInfo(
    proto.routeguide.userInfo,
    /** @param {!proto.routeguide.userId} request */
    function(request) {
        return request.serializeBinary();
    },
    proto.routeguide.userInfo.deserializeBinary
);


/**
 * @param {!proto.routeguide.userId} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.routeguide.userInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.routeguide.userInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.routeguide.RouteGuideClient.prototype.getUserInfo =
    function(request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/routeguide.RouteGuide/getUserInfo',
            request,
            metadata,
            methodInfo_RouteGuide_getUserInfo,
            callback);
    };


/**
 * @param {!proto.routeguide.userId} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.routeguide.userInfo>}
 *     The XHR Node Readable Stream
 */
proto.routeguide.RouteGuidePromiseClient.prototype.getUserInfo =
    function(request, metadata) {
        return new Promise((resolve, reject) => {
            this.delegateClient_.getUserInfo(
                request, metadata, (error, response) => {
                    error ? reject(error) : resolve(response);
                });
        });
    };


export default proto.routeguide;

