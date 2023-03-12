import styled from "styled-components";

const InputStyled = styled.input`
  all: unset;
  padding: 0.4rem;
  background: black;
  color: gray;
  text-transform: uppercase;
  font-weight: bold;
`;

export const Input = ({
  name,
  value,
  onChange,
  placeholder = "Enter Keyword",
}) => (
  <InputStyled
    value={value}
    onChange={onChange}
    name={name}
    placeholder={placeholder}
  />
);
