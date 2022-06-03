// Auto-generated. Do not edit!

// (in-package relaxed_ik_ros1.srv)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;
let EEPoseGoals = require('../msg/EEPoseGoals.js');

//-----------------------------------------------------------

let JointAngles = require('../msg/JointAngles.js');

//-----------------------------------------------------------

class RelaxedIKSolutionRequest {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.ee_pose_goals = null;
    }
    else {
      if (initObj.hasOwnProperty('ee_pose_goals')) {
        this.ee_pose_goals = initObj.ee_pose_goals
      }
      else {
        this.ee_pose_goals = new EEPoseGoals();
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type RelaxedIKSolutionRequest
    // Serialize message field [ee_pose_goals]
    bufferOffset = EEPoseGoals.serialize(obj.ee_pose_goals, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type RelaxedIKSolutionRequest
    let len;
    let data = new RelaxedIKSolutionRequest(null);
    // Deserialize message field [ee_pose_goals]
    data.ee_pose_goals = EEPoseGoals.deserialize(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += EEPoseGoals.getMessageSize(object.ee_pose_goals);
    return length;
  }

  static datatype() {
    // Returns string type for a service object
    return 'relaxed_ik_ros1/RelaxedIKSolutionRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '245f6df50afabcebbe989b0e31fc3ef0';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    relaxed_ik_ros1/EEPoseGoals ee_pose_goals
    
    ================================================================================
    MSG: relaxed_ik_ros1/EEPoseGoals
    std_msgs/Header header
    geometry_msgs/Pose[] ee_poses
    
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
    MSG: geometry_msgs/Pose
    # A representation of pose in free space, composed of position and orientation. 
    Point position
    Quaternion orientation
    
    ================================================================================
    MSG: geometry_msgs/Point
    # This contains the position of a point in free space
    float64 x
    float64 y
    float64 z
    
    ================================================================================
    MSG: geometry_msgs/Quaternion
    # This represents an orientation in free space in quaternion form.
    
    float64 x
    float64 y
    float64 z
    float64 w
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new RelaxedIKSolutionRequest(null);
    if (msg.ee_pose_goals !== undefined) {
      resolved.ee_pose_goals = EEPoseGoals.Resolve(msg.ee_pose_goals)
    }
    else {
      resolved.ee_pose_goals = new EEPoseGoals()
    }

    return resolved;
    }
};

class RelaxedIKSolutionResponse {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.joint_angles = null;
    }
    else {
      if (initObj.hasOwnProperty('joint_angles')) {
        this.joint_angles = initObj.joint_angles
      }
      else {
        this.joint_angles = new JointAngles();
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type RelaxedIKSolutionResponse
    // Serialize message field [joint_angles]
    bufferOffset = JointAngles.serialize(obj.joint_angles, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type RelaxedIKSolutionResponse
    let len;
    let data = new RelaxedIKSolutionResponse(null);
    // Deserialize message field [joint_angles]
    data.joint_angles = JointAngles.deserialize(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += JointAngles.getMessageSize(object.joint_angles);
    return length;
  }

  static datatype() {
    // Returns string type for a service object
    return 'relaxed_ik_ros1/RelaxedIKSolutionResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '2c58555ed7e4a41d6ccedf4c9405efd8';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    relaxed_ik_ros1/JointAngles joint_angles
    
    
    ================================================================================
    MSG: relaxed_ik_ros1/JointAngles
    std_msgs/Header header
    std_msgs/Float64MultiArray angles
    
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
    MSG: std_msgs/Float64MultiArray
    # Please look at the MultiArrayLayout message definition for
    # documentation on all multiarrays.
    
    MultiArrayLayout  layout        # specification of data layout
    float64[]         data          # array of data
    
    
    ================================================================================
    MSG: std_msgs/MultiArrayLayout
    # The multiarray declares a generic multi-dimensional array of a
    # particular data type.  Dimensions are ordered from outer most
    # to inner most.
    
    MultiArrayDimension[] dim # Array of dimension properties
    uint32 data_offset        # padding elements at front of data
    
    # Accessors should ALWAYS be written in terms of dimension stride
    # and specified outer-most dimension first.
    # 
    # multiarray(i,j,k) = data[data_offset + dim_stride[1]*i + dim_stride[2]*j + k]
    #
    # A standard, 3-channel 640x480 image with interleaved color channels
    # would be specified as:
    #
    # dim[0].label  = "height"
    # dim[0].size   = 480
    # dim[0].stride = 3*640*480 = 921600  (note dim[0] stride is just size of image)
    # dim[1].label  = "width"
    # dim[1].size   = 640
    # dim[1].stride = 3*640 = 1920
    # dim[2].label  = "channel"
    # dim[2].size   = 3
    # dim[2].stride = 3
    #
    # multiarray(i,j,k) refers to the ith row, jth column, and kth channel.
    
    ================================================================================
    MSG: std_msgs/MultiArrayDimension
    string label   # label of given dimension
    uint32 size    # size of given dimension (in type units)
    uint32 stride  # stride of given dimension
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new RelaxedIKSolutionResponse(null);
    if (msg.joint_angles !== undefined) {
      resolved.joint_angles = JointAngles.Resolve(msg.joint_angles)
    }
    else {
      resolved.joint_angles = new JointAngles()
    }

    return resolved;
    }
};

module.exports = {
  Request: RelaxedIKSolutionRequest,
  Response: RelaxedIKSolutionResponse,
  md5sum() { return '29b15d468a6abde038d54ab02f005ff8'; },
  datatype() { return 'relaxed_ik_ros1/RelaxedIKSolution'; }
};
