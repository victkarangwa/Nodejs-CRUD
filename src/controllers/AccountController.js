import { v4 as uuid } from "uuid";
import httpStatus from "http-status";
import Response from "../helpers/Response";
// import CustomerService from "../services/CustomerService";

class AccountController {

  static async createAccount(req, res) {
    // const newCuctomer = await AccountService.createAccount(req);

    return Response.successMessage(
      res,
      "Customer account created successfully",
      "newCuctomer",
      httpStatus.CREATED
    );
  }

}
export default AccountController;
