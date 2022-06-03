;; Auto-generated. Do not edit!


(when (boundp 'relaxed_ik::JointAngles)
  (if (not (find-package "RELAXED_IK"))
    (make-package "RELAXED_IK"))
  (shadow 'JointAngles (find-package "RELAXED_IK")))
(unless (find-package "RELAXED_IK::JOINTANGLES")
  (make-package "RELAXED_IK::JOINTANGLES"))

(in-package "ROS")
;;//! \htmlinclude JointAngles.msg.html
(if (not (find-package "STD_MSGS"))
  (ros::roseus-add-msgs "std_msgs"))


(defclass relaxed_ik::JointAngles
  :super ros::object
  :slots (_header _angles ))

(defmethod relaxed_ik::JointAngles
  (:init
   (&key
    ((:header __header) (instance std_msgs::Header :init))
    ((:angles __angles) ())
    )
   (send-super :init)
   (setq _header __header)
   (setq _angles __angles)
   self)
  (:header
   (&rest __header)
   (if (keywordp (car __header))
       (send* _header __header)
     (progn
       (if __header (setq _header (car __header)))
       _header)))
  (:angles
   (&rest __angles)
   (if (keywordp (car __angles))
       (send* _angles __angles)
     (progn
       (if __angles (setq _angles (car __angles)))
       _angles)))
  (:serialization-length
   ()
   (+
    ;; std_msgs/Header _header
    (send _header :serialization-length)
    ;; std_msgs/Float32[] _angles
    (apply #'+ (send-all _angles :serialization-length)) 4
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; std_msgs/Header _header
       (send _header :serialize s)
     ;; std_msgs/Float32[] _angles
     (write-long (length _angles) s)
     (dolist (elem _angles)
       (send elem :serialize s)
       )
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; std_msgs/Header _header
     (send _header :deserialize buf ptr-) (incf ptr- (send _header :serialization-length))
   ;; std_msgs/Float32[] _angles
   (let (n)
     (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4)
     (setq _angles (let (r) (dotimes (i n) (push (instance std_msgs::Float32 :init) r)) r))
     (dolist (elem- _angles)
     (send elem- :deserialize buf ptr-) (incf ptr- (send elem- :serialization-length))
     ))
   ;;
   self)
  )

(setf (get relaxed_ik::JointAngles :md5sum-) "3d19a5bafff81501c7a05b5f8ee0a31e")
(setf (get relaxed_ik::JointAngles :datatype-) "relaxed_ik/JointAngles")
(setf (get relaxed_ik::JointAngles :definition-)
      "std_msgs/Header header
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
")



(provide :relaxed_ik/JointAngles "3d19a5bafff81501c7a05b5f8ee0a31e")


