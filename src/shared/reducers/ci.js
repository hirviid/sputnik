import * as actionTypes from '../actionTypes';

export default (state = null, action) => {
  switch (action.type) {
    // case actionTypes.JOB_FULFILLED:
    //   return {
    //     ...state,
    //     jobs: {
    //       ...state.jobs,
    //       [action.payload.id]: {
    //         ...state.jobs[action.payload.id],
    //         [action.payload.name]: action.payload.data,
    //       },
    //     },
    //   };
    default:
      return state;
  }
};
