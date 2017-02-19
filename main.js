const {app, BrowserWindow,ipcMain} = require('electron')
const path = require('path')
const url = require('url')

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
  console.log(arg)
  event.returnValue = 'pong'
})