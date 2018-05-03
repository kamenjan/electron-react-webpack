// Basic init
// This is entry point to electron's main process

const electron = require('electron');
const {app, BrowserWindow} = electron;
const isDev = require('electron-is-dev');

if (isDev) {
	// Let electron reloads by itself when webpack watches changes in ./gui/
	require('electron-reload')(__dirname);
	console.log('Running in development');
} else {
	console.log('Running in production');
}


// Include React DevTools Plugin
// TODO: React DevTools Plugin do not work on Windows. Solve this.
// const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');
// installExtension(REACT_DEVELOPER_TOOLS)
// 	.then((name) => console.log(`Added Extension:  ${name}`))
// 	.catch((err) => console.log('An error occurred: ', err));

// Require and run spawn for running MongoDB/GraphQL(/Express?) nodejs process
// TODO: Add platform specific node binaries and initialization. Do I even need this now that we're using SQLite?
// import { spawn } from 'child_process';
// spawn("./node", ["./system/gui.js"], {
// 	cwd: process.cwd()
// });

// TODO: sqlite3 does not install on windows using npm. Solve this.
// const sqlite3 = require('sqlite3').verbose();
// let db = new sqlite3.Database('./db/test.db', (err) => {
// 	if (err) {
// 		console.error(err.message);
// 	}
// 	console.log('Connected to the Place database.');
// });


// db.close((err) => {
// 	if (err) {
// 		return console.error(err.message);
// 	}
// 	console.log('Close the database connection.');
// });


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

    mainWindow.loadURL(`file://${__dirname}/gui/index.html`);

    // NOTE: This is is for Windows only - a temp solution for broken DevTools on Win10
	if (process.platform === 'win32') {
		isDev ? mainWindow.webContents.openDevTools() : null;
	}

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