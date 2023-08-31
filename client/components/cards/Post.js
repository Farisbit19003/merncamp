import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context";
import renderHTML from "react-render-html";
import moment from "moment";
import { Avatar } from "antd";
import PostImage from "../images/PostImage";
import { imageSource } from "../../functions/index.js";
import { useRouter } from "next/router";
import {
  HeartOutlined,
  HeartFilled,
  EditTwoTone,
  DeleteTwoTone,
  CommentOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import axios from "axios";
const Post = ({
  post,
  commentsCount = 5,
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
      {post && post.postedBy && (
        <div key={post._id} className="card mb-5">
          <div className="card-header">
            <Avatar size={40} src={imageSource(post.postedBy)} />
            {"  "}
            <span className="pt-2 ml-3" style={{ marginLeft: "1rem" }}>
              {post.postedBy.name}
            </span>
            <span className="pt-2 ml-3" style={{ marginLeft: "1rem" }}>
              {" "}
              {moment(post.createdAt).fromNow()}
            </span>
          </div>
          <div className="card-body">{renderHTML(post.content)}</div>
          <div className="card-footer">
            {post.image && <PostImage url={post.image.url} />}
            <div className="d-flex pt-2">
              {state &&
              state.user &&
              post.likes &&
              post.likes.includes(state.user._id) ? (
                <HeartFilled
                  onClick={() => handleUnLike(post._id)}
                  className="text-danger pt-2 h5 px-2"
                />
              ) : (
                <HeartOutlined
                  onClick={() => handleLike(post._id)}
                  className="text-danger pt-2 h5 px-2"
                />
              )}
              <div className="pt-2" style={{ marginRight: "1rem" }}>
                {post.likes.length} likes
              </div>
              <CommentOutlined
                onClick={() => handleComment(post)}
                className="text-danger pt-2 h5 px-2"
              />
              <div className="pt-2">
                <Link
                  href={`/post/${post._id}`}
                  style={{ textDecoration: "none" }}
                >
                  {post.comments.length} comments
                </Link>
              </div>
              {state && state.user && state.user._id === post.postedBy._id && (
                <>
                  <EditTwoTone
                    onClick={() => router.push(`/user/post/${post._id}`)}
                    className="pt-2 h5 px-2 mx-auto"
                  />
                  <DeleteTwoTone
                    onClick={() => handleDelete(post)}
                    className="pt-2 h5 px-2"
                  />
                </>
              )}
            </div>
          </div>
          {post.comments && post.comments.length > 0 && (
            <ol
              className="list-group"
              style={{ maxHeight: "125px", overflow: "scroll" }}
            >
              {post.comments.slice(0, commentsCount).map((c) => (
                <li
                  key={c._id}
                  className="list-groupitem d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div>
                      <Avatar
                        size={20}
                        className="mb-1 mr-3"
                        src={imageSource(c.postedBy)}
                      />{" "}
                      {c.postedBy.name}
                    </div>
                    <div>{c.text}</div>
                  </div>
                  <span className="badge rounded-pill text-muted">
                    {moment(c.created).fromNow()}
                    {"  "}
                    {state &&
                      state.user &&
                      state.user._id === c.postedBy._id && (
                        <DeleteTwoTone
                          className="h6"
                          onClick={() => removeComment(post._id, c)}
                        />
                      )}
                  </span>
                </li>
              ))}
            </ol>
          )}
        </div>
      )}
    </>
  );
};
export default Post;
