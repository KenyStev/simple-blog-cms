import styled from "styled-components";

const Img = styled.img`
  position: "relative";
  width: 100%;
`;

export const Image = ({ src, alt }) => <Img src={src} alt={alt} />;
