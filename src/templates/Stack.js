import styled from "styled-components";

const Flexbox = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  box-sizing: border-box;
`;

export const Stack = ({ children }) => <Flexbox>{children}</Flexbox>;
