
const initialState = {
  input: '',
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_INPUT':
      return { ...state, input: state.input + action.payload };
    case 'CALCULATE_RESULT':
      try {
        return { ...state, input: eval(state.input).toString() };
      } catch (error) {
        return { ...state, input: 'Error' };
      }
    default:
      return state;
  }
};

export default calculatorReducer;
