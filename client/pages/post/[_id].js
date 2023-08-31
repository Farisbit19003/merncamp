import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import UserRoute from "../../components/routes/UserRoute";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Post from "../../components/cards/Post";
import Link from "next/link";
import { RollbackOutlined } from "@ant-design/icons";

const PostComents = () => {
  const [post, setPost] = useState({});
  const router = useRouter();
  const _id = router.query._id;
  useEffect(() => {
    if (_id) fetchPost();
  }, [_id]);
  const fetchPost = async () => {
    try {
      const { data } = await axios.get(`/user-post/${_id}`);
      setPost(data);
    } catch (err) {
      console.log(err);
    }
  };
  const removeComment = async (postId, comment) => {
    let ans= window.confirm("Are You Sure.?.?");
    if(!ans) return;
    try {
      const { data } = await axios.put("/remove-comment", {
        postId,
        comment,
      });
      console.log("comment removed", data);
      fetchPost();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container-fluid">
      <div className="row py-5 bg-default-image">
        <div className="col text-center">
          <h1>MERNCAMP</h1>
        </div>
      </div>
      <div className="container col-md-8 offset-2 pt-5">
        <Post post={post} commentsCount={100} removeComment={removeComment} />
      </div>
      <Link
        href="/user/dashboard"
        className="d-flex justify-content-center p-5"
      >
        <RollbackOutlined className="h3" />
      </Link>
    </div>
  );
};
export default PostComents;
