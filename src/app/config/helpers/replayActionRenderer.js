export default function replayActionRenderer(store) {
  window.ipcRenderer.on('redux-action', (event, payload) => {
    store.dispatch(payload);
  });
}
