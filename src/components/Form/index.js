import React, { useState } from "react";
import PropTypes from "prop-types";
import ExpenseSection from "../ExpenseSection";
import IncomeSection from "../IncomeSection";

import {
  Wrapper,
  Input,
  Row,
  Button,
  Comment,
  CommentWrapper,
  ButtonRow,
  ModalWrapper,
} from "./styles";

const Form = (props) => {
  const [form, setForm] = useState({
    value: "",
    date: new Date().toISOString().substring(0, 10),
    comment: "",
    category: "",
    option: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();

    const transactionData = {
      value: form.value,
      date: form.date,
      category: form.category,
      comment: form.comment,
    };

    props.onChange(transactionData);

    setForm({
      value: "",
      date: new Date().toISOString().substring(0, 10),
      category: "",
      option: "",
      comment: "",
    });

    props.onCloseFormModal();
  };

  const onChange = (event) => {
    const { value, name } = event.target;

    if (name === "category") {
      setForm({
        ...form,
        category: value,
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  return (
    <Wrapper>
      <form onSubmit={onSubmit}>
        <Row>
          <IncomeSection categories={props.categories} />
          <ExpenseSection categories={props.categories} />
        </Row>
        <Row>
          <Input
            type="date"
            name="date"
            value={form.date}
            onChange={onChange}
          />

          <Input
            name="value"
            type="number"
            placeholder="Сума"
            value={form.value}
            onChange={onChange}
          />
        </Row>
        <ModalWrapper>
          <CommentWrapper>
            <Comment name="comment" value={form.comment} onChange={onChange} />
          </CommentWrapper>
          <ButtonRow>
            <Button>ЗБЕРЕГТИ</Button>
          </ButtonRow>
        </ModalWrapper>
      </form>
    </Wrapper>
  );
};

Form.propTypes = {
  onChange: PropTypes.func,
  onCloseFormModal: PropTypes.func,
  categories: PropTypes.array,
};

export default Form;
