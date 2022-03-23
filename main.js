const { app, BrowserWindow } = require('electron');

let mainWindow;


function createWindow() {

    mainWindow = new BrowserWindow({
        width: 900,
        height: 600,
        title: 'Consulta de gatos JSON',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    mainWindow.loadFile("render.html");

    mainWindow.on('closed', () => {
        mainWindow = null
    })

}

app.whenReady().then(createWindow);

