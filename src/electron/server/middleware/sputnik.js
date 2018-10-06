import * as actionTypes from '../../../shared/actionTypes';
import * as actions from '../../../shared/actions';
import CIFactory from '../services/CIFactory';

const sputnik = store => next => action => {
  if (action.type === actionTypes.INFO_REQUESTED) {
    const ciMonitor = CIFactory.getMonitor('jenkins', action.payload.configuration);

    ciMonitor.getInfo(data => {
      next(actions.fulfilInfo('jenkins', data));
    });

    return;
  }

  return next(action);
};

export default sputnik;
