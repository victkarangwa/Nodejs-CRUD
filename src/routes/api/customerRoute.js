import express from "express";
import CustomerController from "../../controllers/CustomerController";
import { doesCustomerExist } from "../../middlewares/dataChecker";
import Validator from "../../middlewares/Validator";

const customer = express.Router();

customer.post(
  "/new",
  Validator.newCustomerRules(),
  Validator.validateInput,
  CustomerController.createCustomer
);

customer.get("/all", CustomerController.getAllCustomers);

customer.delete("/:id", doesCustomerExist, CustomerController.deleteCustomer);

customer.patch("/:id", doesCustomerExist, CustomerController.updateCustomer);

export default customer;
