import styled from "styled-components";

const LabelStyled = styled.label`
  text-transform: uppercase;
  font-weight: bold;
  font-size: ${(props) => props.size || ""};
`;

export const Label = ({ text, ...props }) => (
  <LabelStyled {...props}>{text}</LabelStyled>
);
