const electron = require('electron'); // because start field is def npm not electron
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.whenReady().then(createWindow)
/*
app.on('ready', () => {
    Object.assign(config.get('winBounds'));
    win = BrowserWindow();
    win.loadURL(`file://${__dirname}/app/index.html`);

    win.once('ready-to-show', win.show);

    win.on('close', () => {
        config.set('winBounds', win.getBounds());
    })
});
*/

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })
    win.loadURL('http://localhost:3000');
}


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

