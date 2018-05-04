// This is entry point to electron's render process

import React from 'react';
import {render} from 'react-dom';
import App from './App.js';
import 'global.css';
import { ipcRenderer } from 'electron';

ipcRenderer.on('stop-server', (event, data) => {
	// This is okay for now but there is a better solution. We can use IPC to
	// tell the server (the Express gui itself) to gracefully shutdown. This
	// would be much better especially if we had database connections or other
	// resources we were using that needed to be cleaned up.
	node.kill('SIGINT');
});

render( <App/>, document.getElementById('app') );
