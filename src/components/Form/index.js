import React, { Component } from "react";
import PropTypes from "prop-types";
import { Wrapper, Input, Row, Button, Comment } from "./styles";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: "",
      date: new Date().toISOString().substring(0, 10),
      comment: "",
    };
  }

  onSubmit = (event) => {
    event.preventDefault();

    this.props.onChange(this.state);
    this.setState({
      value: "",
      comment: "",
    });
  };

  onChange = (event) => {
    const { value, name } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <Wrapper>
        <form onSubmit={this.onSubmit}>
          <Row>
            <Input
              name="value"
              type="number"
              placeholder="Сума"
              value={this.state.value}
              onChange={this.onChange}
            />

            <Input
              type="date"
              name="date"
              value={this.state.date}
              onChange={this.onChange}
            />
          </Row>

          <Row>
            <Comment
              name="comment"
              value={this.state.comment}
              onChange={this.onChange}
            />
            <Button>Зберегти</Button>
          </Row>
        </form>
      </Wrapper>
    );
  }
}

Form.propTypes = {
  onChange: PropTypes.func,
};

export default Form;
