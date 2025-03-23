
//courses
import getCourses from "./course/getCourses"
import getCourseBySlug from "./course/getCourseBySlug"
import getCourseById from "./course/getCourseById"


//student 
import isEnrolledInCourse from "./student/isEnrolledInCourse"
import createStudentIfNotExist from "./student/createStudentIfNotExist"
import createEnrollment from "./student/createEnrollment"
import getStudentByClerkId from "./student/getStudentByClerkId"

//lesson 
import getLessonById from "./lesson/getLessonById"
import getLessonCompletionStatus from "./lesson/getLessonCompletionStatus"
import completeLessonById from "./lesson/completeLessonById"
import uncompleteLessonById from "./lesson/uncompleteLessonById"

import {adminClient} from "./adminClient"


export {
  //course
  getCourses,
  getCourseBySlug,
  getCourseById,
  
  //student 
  isEnrolledInCourse,
  createStudentIfNotExist,
  createEnrollment,
  getStudentByClerkId,
  
  //lesson
  getLessonById,
  getLessonCompletionStatus,
  uncompleteLessonById,
  completeLessonById,
  
  adminClient
}