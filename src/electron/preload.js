const { ipcRenderer: ipc } = require('electron');
init();

function init() {
  window.ipcRenderer = ipc; // TODO do not expose the complete ipcRenderer
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
