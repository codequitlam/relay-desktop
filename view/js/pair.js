// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const electron = require('electron');
const ipcRenderer = electron.ipcRenderer;

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('searchDevices').onclick = (e) => {
    e.preventDefault()
    console.log('PAIR CLICKED')
  }
})