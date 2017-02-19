const database = require('./database')
const models = require('./models')

let db

const init = () => {
    console.log('Starting persistance')
    db = database.init()
}
const createCourse = function (course) {
  const crs = models.newCourse()
  crs.name = course.name
  crs.duration = course.duration
  crs.description = course.description
  crs.startDate = course.startDate
  // insergt course into db
  const courseID = db.addCourse(crs)
  return courseID
}

const getCourses = function(){
    return db.getCourses()
}

const getStudents = function (courseID) {
  // get students of courseID
  console.log('getting students ...')
  console.log('got courseID ', courseID)
  return [1, 2, 3]
}

const addStudents = function (courseID, student) {
  // add student to db
  console.log('successfully added student')
  return true
}

const getStudentPurchases = function (studentID) {
  // get all purchases for studentID
  return [1, 2, 3, 4]
}

const addStudentPurchase = function (studentID, purchase) {
  // add purchase to student with studentID
}

module.exports = {
  'init': init,
  'createCourse': createCourse,
  'getStudents': getStudents,
  'addStudents': addStudents,
  'getStudentPurchases': getStudentPurchases,
  'addStudentPurchase': addStudentPurchase,
  'getCourses' : getCourses
}
