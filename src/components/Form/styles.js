import styled from "styled-components";

export const Wrapper = styled.div`
  background: rgb(185 174 194 / 37%);
  border: 1px solid rgb(39, 27, 48);
  border-radius: 3px;
  padding: 5px;
  margin-bottom: 10px;
`;
Wrapper.displayName = "TransactionWrapper";

export const Row = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;
Row.displayName = "Row";

export const Input = styled.input`
  border: 1px solid rgb(39, 27, 48);
  border-radius: 2px;
  padding: 20px;
  min-width: 220px;
  outline: none;
  min-width: 225px;
`;
Input.displayName = "Input";

export const Comment = styled.textarea`
  border: 1px solid rgb(39, 27, 48);
  border-radius: 3px;
  padding: 20px;
  outline: none;
  width: 88%;
  margin: 0 auto;
`;

export const Button = styled.button`
  border-radius: 3px;
  padding: 20px 35px;
  background-color: #fff;
  border: none;
  color: rgb(39, 27, 48);
  font-size: 18px;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #d9b3ff;
    color: #ff868e;
  }
`;
export const CommentWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const ModalWrapper = styled.div`
  width: 100%;
`;
