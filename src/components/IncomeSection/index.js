  import React, { useState } from "react";
import { SectionWrapper, Title, Select } from "./styles";
  import { FormattedMessage, useIntl } from "react-intl";


const IncomeSection = ({ categories }) => {
     const intl = useIntl();
    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };

    return (
      <SectionWrapper>
        <Title>ПРИБУТОК</Title>
        <Select onChange={handleOptionChange} value={selectedOption}>
          <option value="salary">
            {intl.formatMessage({ id: "income.salary" })}
          </option>
          <option value="gifts">
            {intl.formatMessage({ id: "income.gifts" })}
          </option>
          <option value="other_income">
            {intl.formatMessage({ id: "income.other" })}
          </option>
        </Select>
      </SectionWrapper>
    );
  };

  export default IncomeSection;
