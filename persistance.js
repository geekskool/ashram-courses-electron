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
  return db.getStudents(courseID)
}

const addStudent = function (courseID, student) {
  const st = models.newStudent()
    st.name = student.name
    st.deposit = student.deposit,
    st.roomNo = student.roomNo
  const studentID = db.addStudent(courseID,st)
  return studentID
}

const getStudentPurchases = function (courseID, studentID) {
  return db.getStudentTransactions(courseID, studentID)
}

const addPurchase = function (courseID, studentID, purchase) {
  const txn = models.newTransaction()
  txn.type = purchase.type
  txn.name = purchase.name
  txn.date = purchase.date
  txn.count = purchase.count
  txn.rate = purchase.rate
  txn.total = purchase.total
  const txnID = db.addStudentTransaction(courseID, studentID, txn)
  return txnID
}

module.exports = {
  'init': init,
  'createCourse': createCourse,
  'getStudents': getStudents,
  'addStudent': addStudent,
  'getStudentPurchases': getStudentPurchases,
  'addPurchase': addPurchase,
  'getCourses' : getCourses
}
