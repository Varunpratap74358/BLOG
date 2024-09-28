import express from "express";
import { followAndUnfollow, login, logout, signUp, suggestedUser, updateUser, userProfile } from "../controler/userControler.js";
import isAuthenticated from "../middleware/isAuthonticated.js";

const route = express.Router()

route.post('/register',signUp)
route.post('/login',login)
route.get('/logout',isAuthenticated ,logout)
route.get('/profile/:id',isAuthenticated ,userProfile)
route.get('/suggested',isAuthenticated ,suggestedUser)
route.get('/follow/:id',isAuthenticated ,followAndUnfollow)
route.put('/update',isAuthenticated ,updateUser)

export default route