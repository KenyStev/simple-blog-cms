import styled from "styled-components";
import { Image } from "../atoms/Image";
import { JustifiedText } from "../atoms/Text";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const Preview = ({ img, text, onClick, ...props }) => (
  <Container onClick={onClick} {...props}>
    {img && <Image src={img} />}
    <JustifiedText>{text}</JustifiedText>
  </Container>
);
