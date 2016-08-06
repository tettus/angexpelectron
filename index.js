var electron = require('electron');
var app = electron.app;
//var BrowserWindow = require('browser-window');
var BrowserWindow = electron.BrowserWindow;

var server=require('./src/server/app');

app.on('ready', ()=>{
    var mainWindow = new BrowserWindow({
        width: 380,
        height: 720,
        resizable: false
    })
    mainWindow.loadURL('file://' + __dirname + '/src/index.html');
    mainWindow.setMenu(null);
  
    try{
     server.listen(3000);
    }catch(err){
         throw err;
     }
});


 

 
