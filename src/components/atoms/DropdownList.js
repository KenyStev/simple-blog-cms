import styled from "styled-components";

const UL = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  left: 0;
  margin: 0;
  border: 1px solid black;
  background: white;
  list-style-type: none;
  padding: 0;
`;

export const DropdownList = ({ children }) => <UL>{children}</UL>;
