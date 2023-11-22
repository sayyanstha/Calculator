import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as calculatorActions from './actions/calculatorActions';

class Calculator extends React.Component {
  handleButtonClick = (value) => {
    this.props.actions.updateInput(value);
  };

  handleCalculate = () => {
    this.props.actions.calculateResult();
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.input}
          readOnly
        />
        <br />
        <button onClick={() => this.handleButtonClick('1')}>1</button>
        <button onClick={() => this.handleButtonClick('2')}>2</button>
        {/* Add buttons for other digits and operators */}
        <br />
        <button onClick={this.handleCalculate}>=</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  input: state.calculator.input,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(calculatorActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
