const { contextBridge, ipcRenderer } = require('electron');

const getVersions = () => {
  const versions = {};

  for (const type of ['chrome', 'node', 'electron']) {
    versions[type] = process.versions[type];
  }

  return versions;
};

const api = {
  readKnowledgeBase : () => ipcRenderer.invoke('api:kb:read'),
};

const bridge = {
  versions: getVersions(),
  api,
};

contextBridge.exposeInMainWorld('bridge', bridge);
