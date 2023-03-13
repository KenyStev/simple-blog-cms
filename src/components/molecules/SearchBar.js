import styled from "styled-components";
import { Button } from "../atoms/Button";
import { Label } from "../atoms/Label";
import { AutocompleteInput } from "./AutocompleteInput";
import { useBlogPostStorage } from "../../hooks/useLocalstorageState";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  gap: 0.5rem;
`;

export const SearchBar = ({ label }) => {
  const { blogPosts } = useBlogPostStorage();
  const navigate = useNavigate();

  return (
    <Container>
      <Label text={label} />
      <Container direction='row'>
        <AutocompleteInput
          options={blogPosts}
          onSelect={(post) => navigate(`/blog/${post.id}`)}
        />
        <Button>Search</Button>
      </Container>
    </Container>
  );
};
