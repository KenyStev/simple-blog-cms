import styled from "styled-components";

const A = styled.a`
  
`;

export const OutsideLink = ({ href, children }) => (
  <A href={href} target="_blank" rel="noopener noreferrer">{children}</A>
);
