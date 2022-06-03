execute_process(COMMAND "/home/trex/catkin_ws/build/relaxed_ik/catkin_generated/python_distutils_install.sh" RESULT_VARIABLE res)

if(NOT res EQUAL 0)
  message(FATAL_ERROR "execute_process(/home/trex/catkin_ws/build/relaxed_ik/catkin_generated/python_distutils_install.sh) returned error code ")
endif()
