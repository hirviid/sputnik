export const getConfigurations = state => state.ci.configurations;
export const getConfiguration = (state, id) => state.ci.configurations[id];
export const getJob = (state, id, name) => state.ci.jobs[id][name];
