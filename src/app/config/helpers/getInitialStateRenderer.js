export default function getInitialStateRenderer() {
  const getReduxState = window.Bridge.getGlobal('getReduxState');
  if (!getReduxState) {
    throw new Error(
      'Could not find reduxState global in main process, did you forget to call replayActionMain?'
    );
  }
  return JSON.parse(getReduxState());
}
