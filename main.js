const {app, BrowserWindow,ipcMain} = require('electron')
const path = require('path')
const url = require('url')
const pers = require("./persistance")
pers.init()
let win

function createWindow (){
  win = new BrowserWindow({width: 800, height: 500})
  win.loadURL(url.format({
    pathname: path.join(__dirname, './public/index.html'),
    protocol: 'file:',
    slashes: true
  }))
    win.openDevTools();

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
    app.quit()
})

ipcMain.on('addcourse', (event, arg) => {
  const courseID = pers.createCourse(arg)
  event.returnValue = courseID
})

ipcMain.on('getcourses', (event) => {
  const courses = pers.getCourses()
  event.returnValue = courses
})


ipcMain.on('getstudents', (event,arg) => {
  const students = pers.getStudents(arg)
  event.returnValue = students
})

ipcMain.on('addstudent', (event, arg) => {
  const studentID = pers.addStudent(arg.courseID, arg)
  event.returnValue = studentID
})

ipcMain.on('addtransaction', (event, arg) => {
  const txnID = pers.addPurchase(arg.courseID,arg.studentID, arg)
  event.returnValue = txnID
})
ipcMain.on('getpurchases',(event,arg) => {
  const purchases = pers.getStudentPurchases(arg.courseID, arg.studentID)
  event.returnValue = purchases
})