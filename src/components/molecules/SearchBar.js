import styled from "styled-components";
import { Button } from "../atoms/Button";
import { Label } from "../atoms/Label";
import { AutocompleteInput } from "./AutocompleteInput";
import { useBlogPostStorage } from "../../hooks/useLocalstorageState";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  gap: 0.5rem;
`;

export const SearchBar = ({ label }) => {
  const { blogPosts } = useBlogPostStorage();
  const navigate = useNavigate();
  const inputRef = useRef();

  return (
    <Container>
      <Label text={label} />
      <Container direction='row'>
        <AutocompleteInput
          options={blogPosts}
          onSelect={(post) => navigate(`/blog/${post.id}`)}
          ref={inputRef}
        />
        <Button onClick={() => inputRef.current.trigger()}>Search</Button>
      </Container>
    </Container>
  );
};
