// This is entry point to electron's main process

// Basic init
// import { app, BrowserWindow } from 'electron';
const electron = require('electron');
const {app, BrowserWindow} = electron;

// Let electron reloads by itself when webpack watches changes in ./gui/
// NOTE: This makes the OSX build version of electron app crash (module cannot be found)
// require('electron-reload')(__dirname);

// Require and run spawn for running MongoDB/GraphQL(/Express?) nodejs process
// TODO: Add platform specific node binaries and initialization. Do I even need this now that we're using SQLite?
// import { spawn } from 'child_process';
// spawn("./node", ["./system/gui.js"], {
// 	cwd: process.cwd()
// });

const sqlite3 = require('sqlite3').verbose();
// import sqlite3 from 'sqlite3';
let db = new sqlite3.Database('./db/test.db', (err) => {
	if (err) {
		console.error(err.message);
	}
	console.log('Connected to the Place database.');
});


db.close((err) => {
	if (err) {
		return console.error(err.message);
	}
	console.log('Close the database connection.');
});


// To avoid being garbage collected
let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
		width: 1200,
		height: 800,
		resizable: false,
		webPreferences: {
			webSecurity: false
		}
    });

    // TODO: ${__dirname} variable occasionally crashes the app. Error: Not allowed to load local resource: file:///
    // mainWindow.loadURL(`file://${__dirname}/gui/index.html`);
	mainWindow.loadURL(`file:///Users/rok/projects/webdev/nodejs/place/electron-react-webpack/gui/index.html`);

	mainWindow.on('close', () => {
		mainWindow.webContents.send('stop-server');
	});

	mainWindow.on("closed", () => {
		console.log('Closing application.');
		mainWindow = null;
	});
});

app.on("browser-window-created", function (e, window) {
	window.setMenu(null);
});

app.on("window-all-closed", function () {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", function () {
	if (mainWindow === null) {
		createWindow();
	}
});
