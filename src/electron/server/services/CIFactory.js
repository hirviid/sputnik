import CIJenkins from './CIJenkins';

function getMonitor(type, configuration) {
  switch (type) {
    case 'jenkins':
      return new CIJenkins(configuration);
    default:
      throw new Error(`Type ${type} not implemented`);
  }
}

export default {
  getMonitor,
};
