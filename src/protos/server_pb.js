/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.routeguide.MenuModel', null, global);
goog.exportSymbol('proto.routeguide.userId', null, global);
goog.exportSymbol('proto.routeguide.userInfo', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.routeguide.userId = function(opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.routeguide.userId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    /**
     * @public
     * @override
     */
    proto.routeguide.userId.displayName = 'proto.routeguide.userId';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.routeguide.MenuModel = function(opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.routeguide.MenuModel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    /**
     * @public
     * @override
     */
    proto.routeguide.MenuModel.displayName = 'proto.routeguide.MenuModel';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.routeguide.userInfo = function(opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, proto.routeguide.userInfo.repeatedFields_, null);
};
goog.inherits(proto.routeguide.userInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    /**
     * @public
     * @override
     */
    proto.routeguide.userInfo.displayName = 'proto.routeguide.userInfo';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto suitable for use in Soy templates.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
     * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
     *     for transitional soy proto support: http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.routeguide.userId.prototype.toObject = function(opt_includeInstance) {
        return proto.routeguide.userId.toObject(opt_includeInstance, this);
    };


    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.routeguide.userId} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.routeguide.userId.toObject = function(includeInstance, msg) {
        var obj = {
            id: jspb.Message.getFieldWithDefault(msg, 1, 0)
        };

        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.routeguide.userId}
 */
proto.routeguide.userId.deserializeBinary = function(bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.routeguide.userId;
    return proto.routeguide.userId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.routeguide.userId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.routeguide.userId}
 */
proto.routeguide.userId.deserializeBinaryFromReader = function(msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {number} */ (reader.readInt32());
                msg.setId(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.routeguide.userId.prototype.serializeBinary = function() {
    var writer = new jspb.BinaryWriter();
    proto.routeguide.userId.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.routeguide.userId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.routeguide.userId.serializeBinaryToWriter = function(message, writer) {
    var f = undefined;
    f = message.getId();
    if (f !== 0) {
        writer.writeInt32(
            1,
            f
        );
    }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.routeguide.userId.prototype.getId = function() {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.routeguide.userId.prototype.setId = function(value) {
    jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto suitable for use in Soy templates.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
     * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
     *     for transitional soy proto support: http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.routeguide.MenuModel.prototype.toObject = function(opt_includeInstance) {
        return proto.routeguide.MenuModel.toObject(opt_includeInstance, this);
    };


    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.routeguide.MenuModel} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.routeguide.MenuModel.toObject = function(includeInstance, msg) {
        var obj = {
            id: jspb.Message.getFieldWithDefault(msg, 1, 0),
            username: jspb.Message.getFieldWithDefault(msg, 2, ""),
            password: jspb.Message.getFieldWithDefault(msg, 3, ""),
            isadmin: jspb.Message.getFieldWithDefault(msg, 4, 0)
        };

        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.routeguide.MenuModel}
 */
proto.routeguide.MenuModel.deserializeBinary = function(bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.routeguide.MenuModel;
    return proto.routeguide.MenuModel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.routeguide.MenuModel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.routeguide.MenuModel}
 */
proto.routeguide.MenuModel.deserializeBinaryFromReader = function(msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {number} */ (reader.readInt32());
                msg.setId(value);
                break;
            case 2:
                var value = /** @type {string} */ (reader.readString());
                msg.setUsername(value);
                break;
            case 3:
                var value = /** @type {string} */ (reader.readString());
                msg.setPassword(value);
                break;
            case 4:
                var value = /** @type {number} */ (reader.readInt32());
                msg.setIsadmin(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.routeguide.MenuModel.prototype.serializeBinary = function() {
    var writer = new jspb.BinaryWriter();
    proto.routeguide.MenuModel.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.routeguide.MenuModel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.routeguide.MenuModel.serializeBinaryToWriter = function(message, writer) {
    var f = undefined;
    f = message.getId();
    if (f !== 0) {
        writer.writeInt32(
            1,
            f
        );
    }
    f = message.getUsername();
    if (f.length > 0) {
        writer.writeString(
            2,
            f
        );
    }
    f = message.getPassword();
    if (f.length > 0) {
        writer.writeString(
            3,
            f
        );
    }
    f = message.getIsadmin();
    if (f !== 0) {
        writer.writeInt32(
            4,
            f
        );
    }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.routeguide.MenuModel.prototype.getId = function() {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.routeguide.MenuModel.prototype.setId = function(value) {
    jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string username = 2;
 * @return {string}
 */
proto.routeguide.MenuModel.prototype.getUsername = function() {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.routeguide.MenuModel.prototype.setUsername = function(value) {
    jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string password = 3;
 * @return {string}
 */
proto.routeguide.MenuModel.prototype.getPassword = function() {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.routeguide.MenuModel.prototype.setPassword = function(value) {
    jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 isadmin = 4;
 * @return {number}
 */
proto.routeguide.MenuModel.prototype.getIsadmin = function() {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.routeguide.MenuModel.prototype.setIsadmin = function(value) {
    jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.routeguide.userInfo.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto suitable for use in Soy templates.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
     * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
     *     for transitional soy proto support: http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.routeguide.userInfo.prototype.toObject = function(opt_includeInstance) {
        return proto.routeguide.userInfo.toObject(opt_includeInstance, this);
    };


    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.routeguide.userInfo} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.routeguide.userInfo.toObject = function(includeInstance, msg) {
        var obj = {
            nameList: jspb.Message.toObjectList(msg.getNameList(),
                proto.routeguide.MenuModel.toObject, includeInstance)
        };

        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.routeguide.userInfo}
 */
proto.routeguide.userInfo.deserializeBinary = function(bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.routeguide.userInfo;
    return proto.routeguide.userInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.routeguide.userInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.routeguide.userInfo}
 */
proto.routeguide.userInfo.deserializeBinaryFromReader = function(msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = new proto.routeguide.MenuModel;
                reader.readMessage(value,proto.routeguide.MenuModel.deserializeBinaryFromReader);
                msg.addName(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.routeguide.userInfo.prototype.serializeBinary = function() {
    var writer = new jspb.BinaryWriter();
    proto.routeguide.userInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.routeguide.userInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.routeguide.userInfo.serializeBinaryToWriter = function(message, writer) {
    var f = undefined;
    f = message.getNameList();
    if (f.length > 0) {
        writer.writeRepeatedMessage(
            1,
            f,
            proto.routeguide.MenuModel.serializeBinaryToWriter
        );
    }
};


/**
 * repeated MenuModel name = 1;
 * @return {!Array<!proto.routeguide.MenuModel>}
 */
proto.routeguide.userInfo.prototype.getNameList = function() {
    return /** @type{!Array<!proto.routeguide.MenuModel>} */ (
        jspb.Message.getRepeatedWrapperField(this, proto.routeguide.MenuModel, 1));
};


/** @param {!Array<!proto.routeguide.MenuModel>} value */
proto.routeguide.userInfo.prototype.setNameList = function(value) {
    jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.routeguide.MenuModel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.routeguide.MenuModel}
 */
proto.routeguide.userInfo.prototype.addName = function(opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.routeguide.MenuModel, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.routeguide.userInfo.prototype.clearNameList = function() {
    this.setNameList([]);
};


goog.object.extend(exports, proto.routeguide);
