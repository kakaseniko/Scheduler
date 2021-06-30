const electron = require('electron');
const path = require('path');
const url = require('url');

const {app, BrowserWindow, Menu, ipcMain} = electron;

let loginWindow;
let mainWindow;

app.on('ready', function(){
    loginWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    loginWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'loginWindow.html'),
        protocol: 'file:',
        slashes:true
      }));
      Menu.setApplicationMenu(null);
})