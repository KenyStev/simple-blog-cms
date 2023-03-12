import styled from "styled-components";

const ButtonStyled = styled.button`
  all: unset;
  padding: 1rem;
  border: 1px solid black;
  background: #ffa500;
  text-transform: uppercase;
  font-weight: bold;
  color: white;

  &:hover {
    background: #f09000;
    cursor: pointer;
  }
`;

export const Button = ({ children, onClick }) => (
  <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
);
