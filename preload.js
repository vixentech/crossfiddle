const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  saveCode: (code) => {
    ipcRenderer.send('save', code);
  },
});

