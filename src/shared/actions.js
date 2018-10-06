import { INFO_REQUESTED, INFO_FULFILLED } from './actionTypes';

export const requestInfo = configuration => ({
  type: INFO_REQUESTED,
  payload: {
    configuration,
  },
});

export const fulfilInfo = (ciType, data) => ({
  type: INFO_FULFILLED,
  payload: {
    ciType,
    data,
  },
});
