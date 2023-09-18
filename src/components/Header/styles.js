import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    list-style: none;
    padding: 20px;
    display: flex;
    margin-right: 10px;
  }

  li {
    margin-right: 25px;

    a {
      color: ${({ theme }) => theme.linkColor};
      text-decoration: none;
      font-weight: bold;
      text-transform: uppercase;

      &:hover {
        color: #ff868e;
        transform: scale(1.05);
      }

      &:active {
        transform: scale(0.95);
      }
    }
  }
`;
