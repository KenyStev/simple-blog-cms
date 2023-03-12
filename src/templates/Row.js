import styled from "styled-components";

const Flexbox = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  box-sizing: border-box;
`;

export const Row = ({ children }) => <Flexbox>{children}</Flexbox>;
