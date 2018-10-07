const initialState = {
  ci: {
    configurations: {
      '10ba038e-48da-487b-96e8-8d3b99b6d18a': {
        id: '10ba038e-48da-487b-96e8-8d3b99b6d18a',
        ciType: 'jenkins',
        configuration: {
          url: '',
          username: '',
          password: '',
        },
        jobs: [{ name: 'My Jenkins job' }],
      },
    },
  },
};

export default initialState;
