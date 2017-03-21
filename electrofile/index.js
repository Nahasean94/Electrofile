const {app, BrowserWindow, Menu, MenuItem,} = require('electron');

app.on('ready', () => {
    'use strict';
    const window = new BrowserWindow({width: 800, height: 600});
    window.loadURL(`file://${__dirname}/html/index.html`);
});


const menu = new Menu();
menu.append(new MenuItem({label: 'New Folder'}));
menu.append(new MenuItem({label: 'New Document'}));
menu.append(new MenuItem({label: 'Open Terminal'}));
menu.append(new MenuItem({label: 'New Properties'}));
app.on('browser-window-created', (event, win) => {
    'use strict';
    win.webContents.on('context-menu', (e, params) => {
        menu.popup(win, params.x, params.y);
    });
});
