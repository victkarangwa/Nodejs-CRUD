import express from "express";
import AccountController from "../../controllers/AccountController";
import Validator from "../../middlewares/Validator";

const transaction = express.Router();


transaction.post("/new", AccountController.createAccount);

export default transaction;
