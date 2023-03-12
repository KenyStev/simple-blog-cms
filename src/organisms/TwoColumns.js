import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const TwoColumns = ({ children }) => <Container>{children}</Container>;
