import { useParams } from "react-router-dom";
import { Label } from "../components/atoms/Label";
import { useBlogPostStorage } from "../hooks/useLocalstorageState";
import styled from "styled-components";
import { Text } from "../components/atoms/Text";

const Container = styled.div`
  text-align: center;
`;

export const BlogPost = () => {
  const { id } = useParams();
  const { getBlogPostById } = useBlogPostStorage();
  const post = getBlogPostById(id);

  return post ? (
    <Container>
      <Label size='3rem' text={post.title} />
      <div dangerouslySetInnerHTML={{ __html: post.htmlContent }} />
    </Container>
  ) : (
    <Container>
      <Text size='2rem'>No Blog Post for this ID</Text>
    </Container>
  );
};
