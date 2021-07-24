import { check, validationResult } from "express-validator";
import Response from "../helpers/Response";

/**
 * @export
 * @class Validator
 */
class Validator {
  /**
   * Validate input
   * @static
   * @returns {object} error description OR return next middleware
   */
  static validateInput = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessage = errors.errors.map((err) => err.msg);
      return Response.errorMessage(res, errorMessage, 400);
    }
    return next();
  };

  /**
   * Validate ID
   * @static
   * @returns {object} errors
   */
  static newCustomerRules() {
    return [
      check("name", "Customer name is required").isString(),
      check("date_of_birth", "Customer DOB is required").isString(),
      check("phone_number", "Customer phone number is required").isString(),
      check("category", "Customer category ID is required").isUUID(),
    ];
  }
}

export default Validator;
