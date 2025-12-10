import * as path from 'node:path'
import { app, BrowserWindow, shell, dialog } from 'electron'
import { autoUpdater } from 'electron-updater'
import log from 'electron-log'

log.transports.file.level = 'info'
autoUpdater.logger = log

// Handle creating/removing shortcuts on Windows when installing/uninstalling
/* if (require('electron-squirrel-startup')) {
  app.quit()
} */

console.log('process.env.NODE_ENV', process.env.NODE_ENV)
console.log(__dirname)
let mainWindow: BrowserWindow | null = null
const isDev = process.env.NODE_ENV === 'development'
const SHELL_APP_URL = 'http://localhost:5173/'

function createWindow(): void {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
    },
    titleBarStyle: 'hiddenInset', // macOS style
    trafficLightPosition: { x: 10, y: 10 },
    show: false, // Don't show until ready
  })

  // Load the shell app
  if (isDev) {
    // Load dev server during development
    mainWindow.loadURL(SHELL_APP_URL)
    // Open DevTools in development
    mainWindow.webContents.openDevTools()
  } else {
    // Load production build
    mainWindow.loadFile(path.join(process.resourcesPath, 'shell-dist', 'index.html'))
    // path.join(process.resourcesPath, 'shell-dist')
  }

  // Load the shell app
  // mainWindow.loadURL(SHELL_APP_URL)

  // Show window when ready to prevent flickering
  mainWindow.once('ready-to-show', () => {
    mainWindow?.show()
  })

  // Open external links in browser
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      shell.openExternal(url)
      return { action: 'deny' }
    }
    return { action: 'allow' }
  })

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

// Set the app name that appears in the menu bar
app.name = 'CompanyApp'

// This method will be called when Electron has finished initialization
app.whenReady().then(() => {
  createWindow()
  autoUpdater.checkForUpdatesAndNotify()

  app.on('activate', () => {
    // On macOS, re-create window when dock icon is clicked and no windows are open
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

// Quit when all windows are closed, except on macOS
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// Handle app updates in production
app.on('ready', () => {
  if (!isDev) {
    // Auto-update logic here if needed
    // import { autoUpdater } from 'electron-updater';
    // autoUpdater.checkForUpdatesAndNotify();
  }
})

autoUpdater.on('update-downloaded', () => {
  const choice = dialog.showMessageBoxSync({
    type: 'info',
    title: 'Update Ready',
    message: 'A new version is downloaded. Restart now?',
    buttons: ['Restart', 'Later'],
  })

  if (choice === 0) autoUpdater.quitAndInstall()
})
