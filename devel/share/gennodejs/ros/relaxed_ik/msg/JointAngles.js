// Auto-generated. Do not edit!

// (in-package relaxed_ik.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class JointAngles {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.header = null;
      this.angles = null;
    }
    else {
      if (initObj.hasOwnProperty('header')) {
        this.header = initObj.header
      }
      else {
        this.header = new std_msgs.msg.Header();
      }
      if (initObj.hasOwnProperty('angles')) {
        this.angles = initObj.angles
      }
      else {
        this.angles = [];
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type JointAngles
    // Serialize message field [header]
    bufferOffset = std_msgs.msg.Header.serialize(obj.header, buffer, bufferOffset);
    // Serialize message field [angles]
    // Serialize the length for message field [angles]
    bufferOffset = _serializer.uint32(obj.angles.length, buffer, bufferOffset);
    obj.angles.forEach((val) => {
      bufferOffset = std_msgs.msg.Float32.serialize(val, buffer, bufferOffset);
    });
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type JointAngles
    let len;
    let data = new JointAngles(null);
    // Deserialize message field [header]
    data.header = std_msgs.msg.Header.deserialize(buffer, bufferOffset);
    // Deserialize message field [angles]
    // Deserialize array length for message field [angles]
    len = _deserializer.uint32(buffer, bufferOffset);
    data.angles = new Array(len);
    for (let i = 0; i < len; ++i) {
      data.angles[i] = std_msgs.msg.Float32.deserialize(buffer, bufferOffset)
    }
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += std_msgs.msg.Header.getMessageSize(object.header);
    length += 4 * object.angles.length;
    return length + 4;
  }

  static datatype() {
    // Returns string type for a message object
    return 'relaxed_ik/JointAngles';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '3d19a5bafff81501c7a05b5f8ee0a31e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    std_msgs/Header header
    std_msgs/Float32[] angles
    
    ================================================================================
    MSG: std_msgs/Header
    # Standard metadata for higher-level stamped data types.
    # This is generally used to communicate timestamped data 
    # in a particular coordinate frame.
    # 
    # sequence ID: consecutively increasing ID 
    uint32 seq
    #Two-integer timestamp that is expressed as:
    # * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')
    # * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')
    # time-handling sugar is provided by the client library
    time stamp
    #Frame this data is associated with
    string frame_id
    
    ================================================================================
    MSG: std_msgs/Float32
    float32 data
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new JointAngles(null);
    if (msg.header !== undefined) {
      resolved.header = std_msgs.msg.Header.Resolve(msg.header)
    }
    else {
      resolved.header = new std_msgs.msg.Header()
    }

    if (msg.angles !== undefined) {
      resolved.angles = new Array(msg.angles.length);
      for (let i = 0; i < resolved.angles.length; ++i) {
        resolved.angles[i] = std_msgs.msg.Float32.Resolve(msg.angles[i]);
      }
    }
    else {
      resolved.angles = []
    }

    return resolved;
    }
};

module.exports = JointAngles;
