import React, { Component } from "react";
import PropTypes from "prop-types";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: "",
    };
  }

  onSubmit = (event) => {
    event.preventDefault();

    this.props.onChange(this.state.value);
    this.setState({ value: "" });
  };

  onChange = (event) => {
    const { value } = event.target;

    this.setState({
      value: +value,
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="balance"
          type="number"
          placeholder="Сума"
          value={this.state.value}
          onChange={this.onChange}
        />
        <button type="submit">Зберегти</button>
      </form>
    );
  }
}

Form.propTypes = {
  onChange: PropTypes.func,
};

export default Form;
