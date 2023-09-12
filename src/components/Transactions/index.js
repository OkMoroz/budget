import React from "react";
import Transaction from "../Transaction";
import PropTypes from "prop-types";

const Transactions = ({ transactions = [] }) => 
    {transactions.map((transaction) => (
      <Transaction transaction={transaction} key={transaction.id} />
    ))}

Transactions.propTypes = {
  transactions: PropTypes.array,
};

export default Transactions;
