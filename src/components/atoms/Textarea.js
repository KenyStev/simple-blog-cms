import styled from "styled-components";

const StyledTextarea = styled.textarea`
  height: 40rem;
`;

export const Textarea = ({ name, onChange, value }) => (
  <StyledTextarea name={name} onChange={onChange} value={value} />
);
