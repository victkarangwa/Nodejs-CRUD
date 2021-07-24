import { v4 as uuid } from "uuid";
import httpStatus from "http-status";
import Response from "../helpers/Response";
// import CustomerService from "../services/CustomerService";

class TransactionController {

  static async withdraw(req, res) {
    // const newCuctomer = await AccountService.createAccount(req);

    return Response.successMessage(
      res,
      "Money withdrawn successfully",
      "withdraw",
      httpStatus.OK
    );
  }

}
export default TransactionController;
