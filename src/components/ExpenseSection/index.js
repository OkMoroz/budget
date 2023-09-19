import React, { useState } from "react";
import { SectionWrapper, Title, Select } from "./styles";
import { FormattedMessage, useIntl } from "react-intl"; 

const ExpenseSection = ({ categories }) => {
  const intl = useIntl();
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <SectionWrapper>
      <Title>
        <FormattedMessage id="expense.title" defaultMessage="ВИТРАТИ" />
      </Title>
      <Select onChange={handleCategoryChange} value={selectedCategory}>
        <option value="products">
          {intl.formatMessage({ id: "expense.products" })}
        </option>
        <option value="health">
          {intl.formatMessage({ id: "expense.health" })}
        </option>
        <option value="home">
          {intl.formatMessage({ id: "expense.home" })}
        </option>
        <option value="education">
          {intl.formatMessage({ id: "expense.education" })}
        </option>
        <option value="transport">
          {intl.formatMessage({ id: "expense.transport" })}
        </option>
        <option value="leisure">
          {intl.formatMessage({ id: "expense.leisure" })}
        </option>
        <option value="pets">
          {intl.formatMessage({ id: "expense.pets" })}
        </option>
        <option value="gifts">
          {intl.formatMessage({ id: "expense.gifts" })}
        </option>
        <option value="other_expenses">
          {intl.formatMessage({ id: "expense.other" })}
        </option>
      </Select>
    </SectionWrapper>
  );
};

export default ExpenseSection;
