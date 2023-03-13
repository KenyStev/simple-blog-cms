import styled from "styled-components";
import { Preview } from "../components/molecules/Preview";
import { useBlogPostStorage } from "../hooks/useLocalstorageState";
import { Stack } from "../templates/Stack";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/atoms/Button";
import { BlogSettings } from "../components/organisms/BlogSettings";

const PreviewStyled = styled(Preview)`
  padding: 0.5rem 1.5rem;
  border: 1px solid lightgray;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    background: lightgray;
  }
`;

export const Blog = () => {
  const navigate = useNavigate();
  const { blogPosts } = useBlogPostStorage();

  return (
    <Stack>
      <BlogSettings text='Create New' href='/blog/new' />
      {blogPosts.map((post) => (
        <PreviewStyled
          key={post.id}
          text={post.title}
          onClick={() => navigate(`/blog/${post.id}`)}
        />
      ))}
    </Stack>
  );
};
