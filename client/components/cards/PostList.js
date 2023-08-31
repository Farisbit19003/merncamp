import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context";
import { useRouter } from "next/router";

import Post from "./Post";
const PostList = ({
  posts,
  handleDelete,
  handleComment,
  handleUnLike,
  handleLike,
  removeComment,
}) => {
  const [state] = useContext(UserContext);
  const router = useRouter();
  return (
    <>
      {posts &&
        posts.map((post) => (
          <Post
          key={post._id}
          post={post}
          handleComment={handleComment}
          handleDelete={handleDelete}
          handleLike={handleLike}
          removeComment={removeComment}
          handleUnLike={handleUnLike}/>
        ))}
    </>
  );
};
export default PostList;
