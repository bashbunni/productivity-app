const electron = require('electron'); // because start field is def npm not electron
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })
    win.loadURL('http://localhost:3000');
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
})