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

const stu2 = models.newStudent()
stu2.name = "yellow"
stu2.deposit = 500
stu2.roomNo = "2A"


// const course2 = models.newCourse()
// course2.name = "temp2"
// course2.duration = 20
// course2.startDate = (new Date()).toISOString()

const db = database.init()
const cID = db.addCourse(course1)
db.print("after course1")
console.log(cID)
const stID1 = db.addStudent(cID, stu1)
db.print("after student1")
const stID2 = db.addStudent(cID, stu2)
db.print("after student2")

console.log(db.getStudent(cID, stID1))
console.log(db.getStudent(cID, stID2))
