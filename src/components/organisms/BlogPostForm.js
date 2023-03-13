import { useState } from "react";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { Label } from "../atoms/Label";
import { Textarea } from "../atoms/Textarea";
import styled from "styled-components";

const Form = styled.form`
  padding: 2.5rem;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: auto;
  box-sizing: border-box;
`;

export const BlogPostForm = ({ post = {}, onSave, edit }) => {
  const [title, setTitle] = useState(post.title || "");
  const [content, setContent] = useState(post.htmlContent || "");

  return (
    <Form>
      <Label text={`${edit ? "Edit" : "Create"} Blog Post`} />
      <Input
        name='title'
        value={title}
        placeholder='Enter Blogpost Name'
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        name='htmlContent'
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button
        onClick={(event) => {
          event.preventDefault();
          onSave({ id: post.id, title, htmlContent: content });
        }}
      >
        {edit ? "Edit" : "Create"}
      </Button>
    </Form>
  );
};
