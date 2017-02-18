const database = require("./database")
const models = require("./models")

module.exports = {"hello": "world"}

const course1 = models.newCourse()
course1.name = "temp1"
course1.duration = 10
course1.startDate = (new Date()).toISOString()

const stu1 = models.newStudent()
stu1.name = "Green"
stu1.deposit = 200
stu1.roomNo = "1A"

const t1 = models.newTransaction()
t1.type = "purchase"
t1.name = "soap"
t1.count = 2
t1.rate = 12
t1.total = 24
t1.date = (new Date()).toISOString()

const t2 = models.newTransaction()
t2.type = "laundry"
t2.name = "clothes"
t2.count = 5
t2.rate = 10
t2.total = 50
t2.date = (new Date()).toISOString()
// const stu2 = models.newStudent()
// stu2.name = "yellow"
// stu2.deposit = 500
// stu2.roomNo = "2A"


// const course2 = models.newCourse()
// course2.name = "temp2"
// course2.duration = 20
// course2.startDate = (new Date()).toISOString()

const db = database.init()
const cID = db.addCourse(course1)
//db.print("after course1")
//console.log(cID)
const stID1 = db.addStudent(cID, stu1)
//db.print("after student1")
//const stID2 = db.addStudent(cID, stu2)
//db.print("after student2")

db.addStudentTransaction(cID, stID1, t1)
db.addStudentTransaction(cID, stID1, t2)

const st1 = db.getStudentTransactions(cID, stID1)
db.print("trans")
console.log(st1)
