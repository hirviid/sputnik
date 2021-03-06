import startServer from './server/server';
const { app, BrowserWindow, shell, ipcMain, Menu, TouchBar } = require('electron');
const { TouchBarButton, TouchBarLabel, TouchBarSpacer } = TouchBar;

const path = require('path');
const isDev = require('electron-is-dev');

// const oJSONStringify = JSON.stringify;
// let cache = [];
// const myCensor = function(key, value) {
//   if (typeof value === 'object' && value !== null) {
//     if (cache.indexOf(value) !== -1) {
//       // Duplicate reference found
//       // try {
//       // If this value does not reference a parent it can be deduped
//       // return JSON.parse(JSON.stringify(value));
//       // } catch (error) {
//       // discard key if value cannot be deduped
//       return;
//       // }
//     }
//     // Store value in our collection
//     cache.push(value);
//   }
//   return value;
// };

// JSON.stringify = function(data, censor = myCensor) {
//   return oJSONStringify(data, censor);
// };

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    backgroundColor: '#F7F7F7',
    minWidth: 400,
    show: false,
    // titleBarStyle: 'hidden',
    webPreferences: {
      nodeIntegration: false,
      preload: __dirname + '/preload.js',
    },
    height: 800,
    width: 600,
  });

  mainWindow.loadURL(
    isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`
  );

  if (isDev) {
    const {
      default: installExtension,
      REACT_DEVELOPER_TOOLS,
      REDUX_DEVTOOLS,
    } = require('electron-devtools-installer');

    installExtension(REACT_DEVELOPER_TOOLS)
      .then(name => {
        console.log(`Added Extension: ${name}`);
      })
      .catch(err => {
        console.log('An error occurred: ', err);
      });

    installExtension(REDUX_DEVTOOLS)
      .then(name => {
        console.log(`Added Extension: ${name}`);
      })
      .catch(err => {
        console.log('An error occurred: ', err);
      });
  }

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();

    ipcMain.on('open-external-window', (event, arg) => {
      shell.openExternal(arg);
    });

    // In main process.
    ipcMain.on('asynchronous-message', (event, arg) => {
      console.log(arg); // prints "ping"
      event.sender.send('asynchronous-reply', 'async pong');
    });

    ipcMain.on('synchronous-message', (event, arg) => {
      console.log(arg); // prints "ping"
      event.returnValue = 'sync pong';
    });
  });
};

const generateMenu = () => {
  const template = [
    {
      label: 'File',
      submenu: [{ role: 'about' }, { role: 'quit' }],
    },
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { role: 'pasteandmatchstyle' },
        { role: 'delete' },
        { role: 'selectall' },
      ],
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forcereload' },
        { role: 'toggledevtools' },
        { type: 'separator' },
        { role: 'resetzoom' },
        { role: 'zoomin' },
        { role: 'zoomout' },
        { type: 'separator' },
        { role: 'togglefullscreen' },
      ],
    },
    {
      role: 'window',
      submenu: [{ role: 'minimize' }, { role: 'close' }],
    },
    {
      role: 'help',
      submenu: [
        {
          click() {
            require('electron').shell.openExternal('https://getstream.io/winds');
          },
          label: 'Learn More',
        },
        {
          click() {
            require('electron').shell.openExternal('https://github.com/GetStream/Winds/issues');
          },
          label: 'File Issue on GitHub',
        },
      ],
    },
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
};

app.on('ready', () => {
  createWindow();
  generateMenu();

  startServer();
});

app.on('window-all-closed', () => {
  app.quit();
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on('load-page', (event, arg) => {
  mainWindow.loadURL(arg);
});
