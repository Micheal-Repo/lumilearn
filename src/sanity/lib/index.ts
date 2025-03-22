
//courses
import getCourses from "./course/getCourses"
import getCourseBySlug from "./course/getCourseBySlug"
import getCourseById from "./course/getCourseById"


//student 
import isEnrolledInCourse from "./student/isEnrolledInCourse"
import createStudentIfNotExist from "./student/createStudentIfNotExist"
import createEnrollment from "./student/createEnrollment"

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
  
  
  adminClient
}