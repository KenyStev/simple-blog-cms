import styled from "styled-components";

const P = styled.p`
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.size || ""};
`;

export const Text = ({ children, ...props }) => <P {...props}>{children}</P>;

export const JustifiedText = styled(Text)`
  text-align: justify;
`;
