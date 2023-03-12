import styled from "styled-components";

const Img = styled.img`
  position: "relative";
  height: 100%;
  max-height: 4.8rem;
`;

export const Logo = ({ src, alt }) => <Img src={src} alt={alt} />;
