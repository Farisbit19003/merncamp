import express from "express";
import { requireSignIn } from "../middlewares";
import {
  register,
  login,
  currentUser,
  findPeople,
  forgotPassword,
  profileUpdate,
  addFollower,
  userFollow,
  userFollowing,
  searchUser,
  removeFollower,
  userUnFollow,
  getUser,
} from "../controllers/auth";

const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.get("/current-user", requireSignIn, currentUser);
router.post("/forgot-password", forgotPassword);
router.put("/profile-update", requireSignIn, profileUpdate);
router.get("/find-people", requireSignIn, findPeople);
router.put("/user-follow", requireSignIn, addFollower, userFollow);
router.put("/user-unfollow", requireSignIn, removeFollower, userUnFollow);
router.get("/user-following", requireSignIn, userFollowing);
router.get("/search-user/:query", searchUser);
router.get("/user/:username", getUser);

module.exports = router;
