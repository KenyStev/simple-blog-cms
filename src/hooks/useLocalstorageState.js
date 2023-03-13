import { useCallback, useEffect, useState } from "react";
import { demoBlogPost } from "../constants";

export const useLocalStorageState = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export const useBlogPostStorage = () => {
  const [blogPosts, setBlogPosts] = useLocalStorageState("blogposts", [
    demoBlogPost,
  ]);

  const getBlogPostById = useCallback(
    (id) => blogPosts.find((f) => f.id === id) || null,
    [blogPosts]
  );

  const updateBlogPostById = useCallback(
    (updated) => {
      setBlogPosts((posts) =>
        posts.map((post) => (post.id === updated.id ? updated : post))
      );
    },
    [setBlogPosts]
  );

  const createBlogPost = useCallback(
    (post) => setBlogPosts((posts) => [...posts, post]),
    [setBlogPosts]
  );

  return { blogPosts, getBlogPostById, updateBlogPostById, createBlogPost };
};
