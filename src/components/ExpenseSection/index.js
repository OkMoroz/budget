import React, { useState } from "react";
import { SectionWrapper, Title, Select } from "./styles";

const ExpenseSection = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <SectionWrapper>
      <Title>ВИТРАТИ</Title>
      <Select onChange={handleCategoryChange} value={selectedCategory}>
        <option value="products">ПРОДУКТИ</option>
        <option value="health">ЗДОРОВ'Я</option>
        <option value="home">ДІМ</option>
        <option value="education">НАВЧАННЯ</option>
        <option value="transport">ТРАНСПОРТ</option>
        <option value="leisure">ДОЗВІЛЛЯ</option>
        <option value="pets">ДОМАШНІ УЛЮБЛЕНЦІ</option>
        <option value="gifts">ПОДАРУНКИ</option>
        <option value="other_expenses">ІНШІ ВИТРАТИ</option>
      </Select>
    </SectionWrapper>
  );
};

export default ExpenseSection;
