import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ value }) => (value < 0 ? "#e2e1e1" : "#fff")};
  border: 1px solid #d9b3ff;
  border-radius: 3px;
  padding: 5px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
Wrapper.displayName = "TransactionWrapper";

export const TransactionDate = styled.div`
  flex-grow: 1;
`;
TransactionDate.displayName = "TransactionDate";

export const Value = styled.div`
  flex-grow: 1;
`;
Value.displayName = "Value";

export const Category = styled.div`
  flex-grow: 2;
`;
Category.displayName = "Comment";

export const Comment = styled.div`
  flex-grow: 3;
`;
Comment.displayName = "Comment";

export const Icon = styled.span`
  img {
    max-width: 20px;
    margin-right: 10px;
  }
`;
Icon.displayName = "Icon";

export const DeleteButton = styled.button`
  background-color: #f4f4f4;
  color: #333;
  border: none;
  border-radius: 2px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #d9b3ff;
    color: #ff868e;
    font-weight: 700;
  }

  &:active {
    background-color: #ddd;
  }
`;
DeleteButton.displayName = "DeleteButton";
