import PropTypes from "prop-types";
import { useContext, useCallback, memo } from "react";

import { AppContext } from "../../providers/context";
import {
  Wrapper,
  TransactionDate,
  Value,
  Comment,
  Icon,
  Category,
  DeleteButton,
} from "./styles";
import Star from "../../assets/img/star.svg";
import StarFilled from "../../assets/img/star_filed.svg";

const Transaction = memo(
  ({
    transaction: { id, value, date, category, comment, isStarred },
    onDelete, 
    onStarClick,
  }) => {
    const { state } = useContext(AppContext);

    const deleteItem = useCallback(() => onDelete(id), [id]);

    return (
      <Wrapper value={value}>
        <Icon onClick={() => onStarClick(id)}>
          <img src={isStarred ? StarFilled : Star} />
        </Icon>

        <TransactionDate>{date}</TransactionDate>
        <Value>
          {value.toFixed(2)}, {state.currency}
        </Value>
        <Category>{category}</Category>
        <Comment>{comment}</Comment>
        <DeleteButton onClick={deleteItem}>DELETE</DeleteButton>
      </Wrapper>
    );
  }
);

Transaction.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.number, 
    value: PropTypes.number,
    date: PropTypes.string,
    category: PropTypes.string,
    comment: PropTypes.string,
    isStarred: PropTypes.bool,
  }),
  onDelete: PropTypes.func,
  onStarClick: PropTypes.func,
};

Transaction.defaultProps = {
  transaction: {
    label: "",
    value: 0,
  },
};

export default Transaction;
