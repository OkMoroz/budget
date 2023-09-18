import { useState } from "react";
import PropTypes from "prop-types";

export const BalanceData = ({ children }) => {
  const [balance] = useState("");

  return children(balance);
};

BalanceData.propsTypes = {
  children: PropTypes.func.isRequired,
};
