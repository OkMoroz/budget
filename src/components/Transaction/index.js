import PropTypes from "prop-types";

const Transaction = ({ transaction = { label: "", value: 0 } }) => (
  <div>
    Label:{transaction.label}
    <p>Value:{transaction.value}</p>
    <br />
  </div>
);

Transaction.propTypes = {
  transaction: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number,
  }),
};

export default Transaction;
