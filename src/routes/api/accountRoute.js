import express from "express";
import AccountController from "../../controllers/AccountController";
import Validator from "../../middlewares/Validator";

const account = express.Router();


account.post("/new", AccountController.createAccount);

export default account;
