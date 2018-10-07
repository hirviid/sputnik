const { ipcRenderer: ipc, remote } = require('electron');
init();

function init() {
  window.ipcRenderer = ipc; // TODO do not expose the complete ipcRenderer
  window.Bridge = {
    getGlobal: remote.getGlobal,
  };
  // attachIPCListeners();

  // window.Bridge = {
  //   onEvent: () => throw new Error('Not implemented'),
  // };
}

// function attachIPCListeners() {
//   // ipc.on('event', event => {
//   //   window.Bridge.onEvent(event);
//   // });
// }
