import Response from '../helpers/Response';
import QueryService from '../services/QueryService';
import model from '../db/models';

const { Customers } = model;


/**
 * @param {object} req
 * @param {object} res
 * @param {object} next
 * @returns {object} function to check if the customer exists
 */
 export async function doesCustomerExist(req, res, next) {
	const {
		params: { id },
	} = req;
	const customer = await QueryService.findOne(Customers, { where: { id } });

	if (!customer) {
		return Response.errorMessage(res, "customer ID does not exist exists", 409);
	}
	next();
}
