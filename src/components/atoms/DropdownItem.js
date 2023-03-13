import styled from "styled-components";

const LI = styled.li`
  padding: 1rem;
  cursor: pointer;

  &:hover {
    background: lightgray;
  }
`;

export const DropdownItem = ({ children, ...props }) => (
  <LI {...props}>{children}</LI>
);
