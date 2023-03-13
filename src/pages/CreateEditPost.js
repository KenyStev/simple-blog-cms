import { useNavigate, useParams } from "react-router-dom";
import { BlogPostForm } from "../components/organisms/BlogPostForm";
import { useBlogPostStorage } from "../hooks/useLocalstorageState";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const CreateEditPost = ({ edit }) => {
  const { id } = useParams();
  const [finished, setFinished] = useState(false);
  const navigate = useNavigate();
  const { getBlogPostById, updateBlogPostById, createBlogPost } =
    useBlogPostStorage();
  const editPost = edit ? getBlogPostById(id) : { id: uuidv4() };

  useEffect(() => {
    if (finished) {
      if (edit) {
        navigate(`/blog/${editPost.id}`);
      } else {
        navigate("/blog");
      }
    }
  }, [finished, navigate, editPost.id, edit]);

  return (
    <div>
      <BlogPostForm
        post={editPost || {}}
        edit={edit}
        onSave={(post) => {
          if (edit) updateBlogPostById(post);
          else createBlogPost(post);
          setFinished(true);
        }}
      />
    </div>
  );
};
