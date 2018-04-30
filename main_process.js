// Basic init
import { app, BrowserWindow } from 'electron';

// Let electron reloads by itself when webpack watches changes in ./app/
require('electron-reload')(__dirname);

// Require and run spawn for running MongoDB/GraphQL(/Express?) nodejs process
// TODO: Add platform specific node binaries and initialization
import { spawn } from 'child_process';
spawn("./node", ["./backend/app.js"], {
	cwd: process.cwd()
});

// To avoid being garbage collected
let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.loadURL(`file://${__dirname}/app/index.html`)
});
