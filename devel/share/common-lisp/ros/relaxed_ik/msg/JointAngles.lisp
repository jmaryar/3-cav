; Auto-generated. Do not edit!


(cl:in-package relaxed_ik-msg)


;//! \htmlinclude JointAngles.msg.html

(cl:defclass <JointAngles> (roslisp-msg-protocol:ros-message)
  ((header
    :reader header
    :initarg :header
    :type std_msgs-msg:Header
    :initform (cl:make-instance 'std_msgs-msg:Header))
   (angles
    :reader angles
    :initarg :angles
    :type (cl:vector std_msgs-msg:Float32)
   :initform (cl:make-array 0 :element-type 'std_msgs-msg:Float32 :initial-element (cl:make-instance 'std_msgs-msg:Float32))))
)

(cl:defclass JointAngles (<JointAngles>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <JointAngles>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'JointAngles)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name relaxed_ik-msg:<JointAngles> is deprecated: use relaxed_ik-msg:JointAngles instead.")))

(cl:ensure-generic-function 'header-val :lambda-list '(m))
(cl:defmethod header-val ((m <JointAngles>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader relaxed_ik-msg:header-val is deprecated.  Use relaxed_ik-msg:header instead.")
  (header m))

(cl:ensure-generic-function 'angles-val :lambda-list '(m))
(cl:defmethod angles-val ((m <JointAngles>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader relaxed_ik-msg:angles-val is deprecated.  Use relaxed_ik-msg:angles instead.")
  (angles m))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <JointAngles>) ostream)
  "Serializes a message object of type '<JointAngles>"
  (roslisp-msg-protocol:serialize (cl:slot-value msg 'header) ostream)
  (cl:let ((__ros_arr_len (cl:length (cl:slot-value msg 'angles))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) __ros_arr_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) __ros_arr_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) __ros_arr_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) __ros_arr_len) ostream))
  (cl:map cl:nil #'(cl:lambda (ele) (roslisp-msg-protocol:serialize ele ostream))
   (cl:slot-value msg 'angles))
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <JointAngles>) istream)
  "Deserializes a message object of type '<JointAngles>"
  (roslisp-msg-protocol:deserialize (cl:slot-value msg 'header) istream)
  (cl:let ((__ros_arr_len 0))
    (cl:setf (cl:ldb (cl:byte 8 0) __ros_arr_len) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 8) __ros_arr_len) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 16) __ros_arr_len) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 24) __ros_arr_len) (cl:read-byte istream))
  (cl:setf (cl:slot-value msg 'angles) (cl:make-array __ros_arr_len))
  (cl:let ((vals (cl:slot-value msg 'angles)))
    (cl:dotimes (i __ros_arr_len)
    (cl:setf (cl:aref vals i) (cl:make-instance 'std_msgs-msg:Float32))
  (roslisp-msg-protocol:deserialize (cl:aref vals i) istream))))
  msg
)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<JointAngles>)))
  "Returns string type for a message object of type '<JointAngles>"
  "relaxed_ik/JointAngles")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'JointAngles)))
  "Returns string type for a message object of type 'JointAngles"
  "relaxed_ik/JointAngles")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<JointAngles>)))
  "Returns md5sum for a message object of type '<JointAngles>"
  "3d19a5bafff81501c7a05b5f8ee0a31e")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'JointAngles)))
  "Returns md5sum for a message object of type 'JointAngles"
  "3d19a5bafff81501c7a05b5f8ee0a31e")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<JointAngles>)))
  "Returns full string definition for message of type '<JointAngles>"
  (cl:format cl:nil "std_msgs/Header header~%std_msgs/Float32[] angles~%~%================================================================================~%MSG: std_msgs/Header~%# Standard metadata for higher-level stamped data types.~%# This is generally used to communicate timestamped data ~%# in a particular coordinate frame.~%# ~%# sequence ID: consecutively increasing ID ~%uint32 seq~%#Two-integer timestamp that is expressed as:~%# * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')~%# * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')~%# time-handling sugar is provided by the client library~%time stamp~%#Frame this data is associated with~%string frame_id~%~%================================================================================~%MSG: std_msgs/Float32~%float32 data~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'JointAngles)))
  "Returns full string definition for message of type 'JointAngles"
  (cl:format cl:nil "std_msgs/Header header~%std_msgs/Float32[] angles~%~%================================================================================~%MSG: std_msgs/Header~%# Standard metadata for higher-level stamped data types.~%# This is generally used to communicate timestamped data ~%# in a particular coordinate frame.~%# ~%# sequence ID: consecutively increasing ID ~%uint32 seq~%#Two-integer timestamp that is expressed as:~%# * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')~%# * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')~%# time-handling sugar is provided by the client library~%time stamp~%#Frame this data is associated with~%string frame_id~%~%================================================================================~%MSG: std_msgs/Float32~%float32 data~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <JointAngles>))
  (cl:+ 0
     (roslisp-msg-protocol:serialization-length (cl:slot-value msg 'header))
     4 (cl:reduce #'cl:+ (cl:slot-value msg 'angles) :key #'(cl:lambda (ele) (cl:declare (cl:ignorable ele)) (cl:+ (roslisp-msg-protocol:serialization-length ele))))
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <JointAngles>))
  "Converts a ROS message object to a list"
  (cl:list 'JointAngles
    (cl:cons ':header (header msg))
    (cl:cons ':angles (angles msg))
))
