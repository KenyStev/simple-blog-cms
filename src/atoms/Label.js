import styled from "styled-components";

const LabelStyled = styled.label`
  text-transform: uppercase;
  font-weight: bold;
`;

export const Label = ({ text }) => <LabelStyled>{text}</LabelStyled>;
