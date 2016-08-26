var electron = require('electron');
var app = electron.app;
//var BrowserWindow = require('browser-window');
var BrowserWindow = electron.BrowserWindow;

var http = require('http');
var appserver = require('./src/server/app');

app.on('ready', () => {
    var mainWindow = new BrowserWindow({
        frame: false,
        width: 440,
        height: 720,
        resizable: false
    })
    mainWindow.loadURL('file://' + __dirname + '/src/index_electron.html');
    mainWindow.setMenu(null);
    //mainWindow.webContents.openDevTools()

    //start application express server
    try {
        var server = http.createServer(appserver);
        server.listen(3000);
    } catch (err) {
        throw err;
    }

   
});





