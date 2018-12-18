import { INFO_REQUESTED, INFO_FULFILLED, JOB_REQUESTED, JOB_FULFILLED } from './actionTypes';

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

export const requestJob = (id, name) => ({
  type: JOB_REQUESTED,
  payload: {
    id,
    name,
  },
});

export const fulfilJob = (id, name, data) => ({
  type: JOB_FULFILLED,
  payload: {
    id,
    name,
    data,
  },
});
