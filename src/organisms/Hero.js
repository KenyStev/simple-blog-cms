import styled from "styled-components";
import { Text } from "../atoms/Text";

const Container = styled.div`
  width: 100%;
  height: 35rem;
  position: relative;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
`;

const Float = styled.div`
  width: 35rem;
  position: absolute;
  right: 2rem;
  bottom: 1rem;
  font-weight: 500;
  line-height: 2;
`;

export const Hero = ({ img, text }) => (
  <Container bg={img}>
    <Float>
      <Text color='white'>{text}</Text>
    </Float>
  </Container>
);
