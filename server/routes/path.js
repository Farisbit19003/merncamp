import express from "express";
import formidable from "express-formidable";
import { requireSignIn, canEditDeletePost } from "../middlewares";
import {
  createPost,
  uploadImage,
  postsByUser,
  newsFeed,
  addComment,
  removeComment,
  userPost,
  updatePost,
  unlikePost,
  likePost,
  getPost,
  deletePost,
  posts,
} from "../controllers/post";
const router = express.Router();
router.post("/create-post", requireSignIn, createPost);
router.post(
  "/upload-image",
  requireSignIn,
  formidable({ maxFileSize: 5 * 1024 * 1024 }),
  uploadImage
);
router.get("/user-posts", requireSignIn, postsByUser);
router.get("/user-post/:_id", requireSignIn, userPost);
router.put("/update-post/:_id", requireSignIn, canEditDeletePost, updatePost);
router.delete(
  "/delete-post/:_id",
  requireSignIn,
  canEditDeletePost,
  deletePost
);
router.get("/news-feed/:page", requireSignIn, newsFeed);
router.put("/like-post", requireSignIn, likePost);
router.put("/unlike-post", requireSignIn, unlikePost);
router.put("/add-comment", requireSignIn, addComment);
router.put("/remove-comment", requireSignIn, removeComment);
router.get("/posts", posts);
router.get("/post/:_id", getPost);
module.exports = router;
