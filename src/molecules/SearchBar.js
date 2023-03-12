import styled from "styled-components";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { Label } from "../atoms/Label";

const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  gap: 0.5rem;
`;

export const SearchBar = ({ label }) => (
  <Container>
    <Label text={label} />
    <Container direction='row'>
      <Input />
      <Button>Search</Button>
    </Container>
  </Container>
);
