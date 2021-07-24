import { v4 as uuid } from "uuid";
import QueryService from "./QueryService";
import models from "../db/models";

const { Customers } = models;

class CustomerService {
  static async createCustomer(req) {
    const { name, date_of_birth, phone_number, address, category } = req.body;
    const newCustomer = QueryService.create(Customers, {
      id: uuid(),
      name,
      date_of_birth,
      phone_number,
      address,
      category,
    });
    return newCustomer;
  }

  static async getCustomers(req) {
    const allCustomers = QueryService.findAll(Customers);
    return allCustomers;
  }

  static async deleteCustomer(req) {
    const { id } = req.params;
    const allCustomers = QueryService.destroy(Customers, { where: { id } });
    return allCustomers;
  }

  static async updateCustomer(req) {
    const {
      params: { id },
      body,
    } = req;
    const updObj = [{ ...body }, { where: { id } }];
    const allCustomers = QueryService.update(Customers, updObj);
    return allCustomers;
  }
}
export default CustomerService;
