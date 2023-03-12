import styled from "styled-components";

const P = styled.p`
  color: ${(props) => props.color || "black"};
`;

export const Text = ({ children, ...props }) => <P {...props}>{children}</P>;

export const JustifiedText = styled(Text)`
  text-align: justify;
`;
