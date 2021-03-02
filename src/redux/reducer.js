const INITIAL_STATE = {
  files: [],
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'setFiles':
      return {
        files: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
