import * as actionTypes from '../../../shared/actionTypes';
import * as actions from '../../../shared/actions';
import * as selectors from '../../../shared/selectors';
import CIFactory from '../services/CIFactory';

const sputnik = store => next => action => {
  if (action.type === actionTypes.INFO_REQUESTED) {
    const ciMonitor = CIFactory.getMonitor('jenkins', action.payload.configuration);

    ciMonitor.getInfo(data => {
      next(actions.fulfilInfo('jenkins', data));
    });

    return;
  }
  if (action.type === actionTypes.JOB_REQUESTED) {
    const configuration = selectors.getConfiguration(store.getState(), action.payload.id);
    const ciMonitor = CIFactory.getMonitor('jenkins', configuration.configuration);

    ciMonitor.getJob(action.payload.name, data => {
      next(actions.fulfilJob(action.payload.id, action.payload.name, data));
    });

    return;
  }

  return next(action);
};

export default sputnik;
