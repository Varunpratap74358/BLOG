import express from "express";
import isAuthenticated from "../middleware/isAuthonticated.js";
import { bookmarkTweet, createTweet, deleteTweet, getAlltweet, getOutherUserTweets, likeOrDislike } from "../controler/tweetControler.js";

const route = express.Router()

route.post("/create",isAuthenticated,createTweet)
route.delete("/delete/:id",isAuthenticated,deleteTweet)
route.get("/alltweets",isAuthenticated,getAlltweet)
route.get("/alltweets/:userid",isAuthenticated,getOutherUserTweets)
route.get("/likeordislike/:id",isAuthenticated,likeOrDislike)
route.get("/bookmark/:id",isAuthenticated,bookmarkTweet)


export default route