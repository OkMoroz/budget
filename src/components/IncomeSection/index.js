import React, { useState } from "react";
import { SectionWrapper, Title, Select } from "./styles";

const IncomeSection = ({ categories }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <SectionWrapper>
      <Title>ПРИБУТОК</Title>
      <Select onChange={handleOptionChange} value={selectedOption}>
        <option value="salary">ЗАРОБІТНА ПЛАТА</option>
        <option value="gifts">ПОДАРУНКИ</option>
        <option value="other_income">ІНШИЙ ДОХІД</option>
      </Select>
    </SectionWrapper>
  );
};

export default IncomeSection;
