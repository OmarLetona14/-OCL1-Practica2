const electron = require('electron');
const url =  require('url');
const path =  require('path');

const {app, BrowserWindow} = electron;


let mainWindow;

//Listen for the app to be ready
app.on('ready', function(){

    mainWindow = new BrowserWindow({});
    //Load html window
});