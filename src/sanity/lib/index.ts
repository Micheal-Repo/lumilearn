
//courses
import getCourses from "./course/getCourses"
import getCourseBySlug from "./course/getCourseBySlug"
import getCourseById from "./course/getCourseById"
import searchCourses from "./course/searchCourses"


//student 
import isEnrolledInCourse from "./student/isEnrolledInCourse"
import createStudentIfNotExist from "./student/createStudentIfNotExist"
import createEnrollment from "./student/createEnrollment"
import getStudentByClerkId from "./student/getStudentByClerkId"
import getEnrolledCourses from "./student/getEnrolledCourses"

//lesson 
import getLessonById from "./lesson/getLessonById"
import getLessonCompletionStatus from "./lesson/getLessonCompletionStatus"
import completeLessonById from "./lesson/completeLessonById"
import uncompleteLessonById from "./lesson/uncompleteLessonById"
import getCourseProgress from "./lesson/getCourseProgress"

import {adminClient} from "./adminClient"


export {
  //course
  getCourses,
  getCourseBySlug,
  getCourseById,
  searchCourses,
  
  //student 
  isEnrolledInCourse,
  createStudentIfNotExist,
  createEnrollment,
  getStudentByClerkId,
  getEnrolledCourses,
  
  //lesson
  getLessonById,
  getLessonCompletionStatus,
  uncompleteLessonById,
  completeLessonById,
  getCourseProgress,
  
  adminClient
}