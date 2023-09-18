import styled from "styled-components";

export const StyledContainer = styled.div`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  height:64vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  margin: 50px;
  font-size: 25px;
`;

export const Heading = styled.h1`
  text-transform: uppercase;
  font-size: 1.5em;
  margin-bottom: 40px;
`;
export const Label = styled.label`
display:flex;
align-items:center;
justify-content:space-between;
`;

export const SelectWrapper = styled.div``;

export const CurrencySelect = styled.select`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  border-radius:3px;
  padding: 5px;
  margin: 20px;
`;

export const Option = styled.option`
  font-size: 15px;
`;

export const Button = styled.button`
  color: #333;
  padding: 5px 10px;
  color: lightgrey;
  outline: none;
  background-color: #fff;
  margin-top: 40px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 5px;
  border: 2px solid lightgrey;
  cursor: pointer;

  &:hover {
    background-color: #d9b3ff;
    color: #ff868e;
  }

  &:active {
    background-color: #ddd;
  }
`;