import { v4 as uuid } from "uuid";
import httpStatus from "http-status";
import Response from "../helpers/Response";
import CustomerService from "../services/CustomerService";

class CustomerController {

  static async createCustomer(req, res) {
    const newCuctomer = await CustomerService.createCustomer(req);

    return Response.successMessage(
      res,
      "Customer created successfully",
      newCuctomer,
      httpStatus.CREATED
    );
  }

  static async getAllCustomers(req, res) {
    const allCustomers = await CustomerService.getCustomers(req);

    return Response.successMessage(
      res,
      "All customers retrieved successfully",
      allCustomers,
      httpStatus.OK
    );
  }

  static async deleteCustomer(req, res) {
    const allCustomers = await CustomerService.deleteCustomer(req);

    return Response.successMessage(
      res,
      "Customer deleted successfully",
      null,
      httpStatus.OK
    );
  }

  static async updateCustomer(req, res) {
    const allCustomers = await CustomerService.updateCustomer(req);

    return Response.successMessage(
      res,
      "Customer updated successfully",
      null,
      httpStatus.OK
    );
  }

}
export default CustomerController;
